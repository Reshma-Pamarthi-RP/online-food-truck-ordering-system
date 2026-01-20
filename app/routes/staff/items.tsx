import {ArrowLeftIcon, PlusIcon} from '@heroicons/react/24/solid'
import {
	Button,
	Modal,
	NumberInput,
	TextInput,
	Textarea,
	clsx,
} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import type {ActionFunction, LoaderArgs} from '@remix-run/node'
import {json} from '@remix-run/node'
import {Link, useFetcher, useLoaderData} from '@remix-run/react'
import {ObjectId} from 'bson'
import * as React from 'react'
import slugify from 'slugify'
import invariant from 'tiny-invariant'
import {z} from 'zod'
import {TailwindContainer} from '~/components/TailwindContainer'
import {db} from '~/db.server'
import {requireUser} from '~/session.server'
import {badRequest} from '~/utils/misc.server'
import type {inferErrors} from '~/utils/validation'
import {validateAction} from '~/utils/validation'

export const loader = async ({request}: LoaderArgs) => {
	const user = await requireUser(request)

	invariant(user?.foodTruckId, 'User must be associated with a food truck')
	const items = await db.item.findMany({
		where: {
			restaurantId: user?.foodTruckId,
		},
	})

	return json({items})
}

enum MODE {
	edit,
	add,
}

const ManageFoodItemSchema = z.object({
	itemId: z.string().optional(),
	name: z.string().min(1, 'Name is required'),
	description: z.string().min(1, 'Description is required'),
	image: z.string().min(1, 'Image is required'),
	price: z.preprocess(Number, z.number().min(1, 'Price is required')),
})
interface ActionData {
	success: boolean
	fieldErrors?: inferErrors<typeof ManageFoodItemSchema>
}

export const action: ActionFunction = async ({request}) => {
	const staff = await requireUser(request)

	const {fields, fieldErrors} = await validateAction(
		request,
		ManageFoodItemSchema
	)

	if (fieldErrors) {
		return badRequest<ActionData>({success: false, fieldErrors})
	}

	const {itemId, ...rest} = fields
	const id = new ObjectId()

	await db.item.upsert({
		where: {
			id: itemId || id.toString(),
		},
		update: {...rest},
		create: {
			...rest,
			quantity: 1,
			restaurantId: staff.foodTruckId!,
			slug: slugify(rest.name) + '-' + Math.random().toString(36).slice(2),
		},
	})
	return json({success: true})
}

export default function ManageFoodItems() {
	const fetcher = useFetcher<ActionData>()
	const {items} = useLoaderData<typeof loader>()

	type _Item = typeof items[number]

	const [selectedItemId, setSelectedItemId] = React.useState<
		_Item['id'] | null
	>(null)
	const [selectedItem, setSelectedItem] = React.useState<_Item | null>(null)
	const [mode, setMode] = React.useState<MODE>(MODE.edit)
	const [isModalOpen, handleModal] = useDisclosure(false)

	const isSubmitting = fetcher.state !== 'idle'

	React.useEffect(() => {
		if (fetcher.state !== 'idle' && fetcher.submission === undefined) {
			return
		}

		if (fetcher.data?.success) {
			setSelectedItemId(null)
			handleModal.close()
		}
		// handleModal is not meemoized, so we don't need to add it to the dependency array
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetcher.data?.success, fetcher.state, fetcher.submission])

	React.useEffect(() => {
		if (!selectedItemId) {
			setSelectedItem(null)
			return
		}

		const item = items.find(item => item.id === selectedItemId)
		if (!item) return

		setSelectedItem(item)
		handleModal.open()
		// handleModal is not meemoized, so we don't need to add it to the dependency array
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items, selectedItemId])

	return (
		<>
			<TailwindContainer className="rounded-md bg-white">
				<div className="mt-8 px-4 py-10 sm:px-6 lg:px-8">
					<div className="sm:flex sm:flex-auto sm:items-center sm:justify-between">
						<div>
							<Button
								leftIcon={<ArrowLeftIcon className="h-4 w-4" />}
								variant="white"
								size="md"
								component={Link}
								to=".."
								pl={0}
								mb={20}
								color="gray"
							>
								Back
							</Button>
							<h1 className="text-xl font-semibold text-gray-900">
								Manage Items
							</h1>
							<p className="mt-2 text-sm text-gray-700">
								Manage the items that are available in your food truck.
							</p>
						</div>
						<div>
							<Button
								loading={isSubmitting}
								loaderPosition="left"
								onClick={() => {
									setMode(MODE.add)
									handleModal.open()
								}}
							>
								<PlusIcon className="h-4 w-4" />
								<span className="ml-2">Add Item</span>
							</Button>
						</div>
					</div>
					<div className="mt-8 flex flex-col">
						<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
								<table className="min-w-full divide-y divide-gray-300">
									<thead>
										<tr>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
											>
												Name
											</th>

											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
											>
												Price
											</th>

											<th
												scope="col"
												className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
											></th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										{items.map(item => (
											<tr key={item.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													<div className="flex items-center gap-3">
														<img
															src={item.image}
															alt={item.name}
															className="aspect-square h-8 w-8 rounded-full object-cover"
														/>
														<p>{item.name}</p>
													</div>
												</td>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													${item.price.toFixed(2)}
												</td>
												<td className="relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0">
													<div className="flex items-center gap-6">
														<Button
															loading={isSubmitting}
															variant="subtle"
															loaderPosition="right"
															onClick={() => {
																setSelectedItemId(item.id)
																setMode(MODE.edit)
															}}
														>
															Edit
														</Button>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</TailwindContainer>

			<Modal
				opened={isModalOpen}
				onClose={() => {
					setSelectedItemId(null)
					handleModal.close()
				}}
				title={clsx({
					'Edit item': mode === MODE.edit,
					'Add item': mode === MODE.add,
				})}
				centered
				overlayBlur={1.2}
				overlayOpacity={0.6}
			>
				<fetcher.Form method="post" replace>
					<fieldset disabled={isSubmitting} className="flex flex-col gap-4">
						<input
							type="hidden"
							name="restaurantId"
							value={selectedItem?.restaurantId}
						/>
						<input type="hidden" name="itemId" value={selectedItem?.id} />

						<TextInput
							name="name"
							label="Name"
							defaultValue={selectedItem?.name}
							error={fetcher.data?.fieldErrors?.name}
							required
						/>

						<Textarea
							name="description"
							label="Description"
							defaultValue={selectedItem?.description ?? ''}
							error={fetcher.data?.fieldErrors?.description}
							required
						/>

						<NumberInput
							name="price"
							label="Price"
							defaultValue={selectedItem?.price}
							error={fetcher.data?.fieldErrors?.price}
							precision={2}
							step={0.01}
							required
						/>

						<TextInput
							name="image"
							label="Image URL"
							defaultValue={selectedItem?.image}
							error={fetcher.data?.fieldErrors?.image}
							required
						/>

						<div className="mt-1 flex items-center justify-end gap-4">
							<Button
								variant="subtle"
								disabled={isSubmitting}
								onClick={() => {
									setSelectedItem(null)
									handleModal.close()
								}}
								color="red"
							>
								Cancel
							</Button>
							<Button
								type="submit"
								loading={isSubmitting}
								loaderPosition="right"
							>
								{mode === MODE.edit ? 'Save changes' : 'Add item'}
							</Button>
						</div>
					</fieldset>
				</fetcher.Form>
			</Modal>
		</>
	)
}
