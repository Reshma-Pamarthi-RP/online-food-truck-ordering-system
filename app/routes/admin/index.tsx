import {PlusIcon} from '@heroicons/react/24/solid'
import {Button, Modal, PasswordInput, TextInput, Textarea} from '@mantine/core'
import {TimeInput} from '@mantine/dates'
import {useDisclosure} from '@mantine/hooks'
import type {ActionFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useFetcher, useLoaderData} from '@remix-run/react'
import {ObjectId} from 'bson'
import * as React from 'react'
import slugify from 'slugify'
import {z} from 'zod'
import {TailwindContainer} from '~/components/TailwindContainer'
import {db} from '~/db.server'
import {createPasswordHash, daysOfWeek, formatTime} from '~/utils/misc'
import {badRequest} from '~/utils/misc.server'
import type {inferErrors} from '~/utils/validation'
import {validateAction} from '~/utils/validation'

const AddFoodTruckSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	image: z.string().min(1, 'Image is required'),
	description: z.string().min(1, 'Description is required'),
	email: z.string().email('Please enter a valid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const loader = async () => {
	const foodTrucks = await db.foodTruck.findMany({
		include: {
			schedule: true,
		},
	})

	return json({foodTrucks})
}

interface ActionData {
	success: boolean
	fieldErrors?: inferErrors<typeof AddFoodTruckSchema>
}

export const action: ActionFunction = async ({request}) => {
	const {fields, fieldErrors} = await validateAction(
		request,
		AddFoodTruckSchema
	)

	if (fieldErrors) {
		return badRequest<ActionData>({success: false, fieldErrors})
	}

	await db.foodTruck.create({
		data: {
			name: fields.name,
			image: fields.image,
			slug: slugify(fields.name, {lower: true, strict: true}),
			description: fields.description,
			staff: {
				create: {
					email: fields.email,
					passwordHash: await createPasswordHash(fields.password),
					role: 'STAFF',
					firstName: fields.name,
					lastName: 'Owner',
				},
			},
		},
	})
	return json({success: true})
}

export default function ManageFoodTrucks() {
	const fetcher = useFetcher<ActionData>()
	const {foodTrucks} = useLoaderData<typeof loader>()

	type _FoodTruck = typeof foodTrucks[0]

	const [isModalOpen, handleModal] = useDisclosure(false)

	const [selectedFoodTruck, setSelectedFoodTruck] =
		React.useState<_FoodTruck | null>(null)
	const [isScheduleModalOpen, handleScheduleModal] = useDisclosure(false, {
		onClose: () => {
			setSelectedFoodTruck(null)
		},
	})

	const isSubmitting = fetcher.state !== 'idle'

	React.useEffect(() => {
		if (fetcher.state !== 'idle' && fetcher.submission === undefined) {
			return
		}

		if (fetcher.data?.success) {
			handleModal.close()
			handleScheduleModal.close()
		}
		// handleModal is not meemoized, so we don't need to add it to the dependency array
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetcher.data?.success, fetcher.state, fetcher.submission])

	const [schedules, setSchedules] = React.useState<
		typeof foodTrucks[0]['schedule']
	>([])

	React.useEffect(() => {
		if (selectedFoodTruck) {
			setSchedules(selectedFoodTruck.schedule)
		} else {
			setSchedules([])
		}
	}, [selectedFoodTruck])

	const validateTimes = (startTime: Date, endTime: Date): boolean => {
		if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
			return false
		}
		return startTime < endTime
	}

	const updateSchedule = (
		day: string,
		field: keyof typeof schedules[0],
		value: Date | null
	) => {
		const scheduleForDay = schedules.find(s => s.day === day)

		const updatedSchedule: typeof schedules[0] = {
			...(scheduleForDay || {
				id: new ObjectId().toString(),
				foodTruckId: selectedFoodTruck?.id || '',
				day,
				startTime: '',
				endTime: '',
			}),
		}

		if (value) {
			updatedSchedule[field] = value.toISOString()
		} else {
			setSchedules(prev => prev.filter(s => s.day !== day))
			return
		}

		if (!scheduleForDay && field === 'startTime' && value) {
			const endTime = new Date(value)
			endTime.setHours(value.getHours() + 1)
			updatedSchedule.endTime = endTime.toISOString()
		}

		if (updatedSchedule.startTime && updatedSchedule.endTime) {
			const startTime = new Date(updatedSchedule.startTime)
			const endTime = new Date(updatedSchedule.endTime)

			if (!validateTimes(startTime, endTime)) {
				alert('Start time should be before end time.')
				return
			}
		}

		setSchedules(prev => [...prev.filter(s => s.day !== day), updatedSchedule])
	}

	const validateAndSave = () => {
		const isValid = schedules.every(schedule => {
			const startTime = new Date(schedule.startTime)
			const endTime = new Date(schedule.endTime)
			return validateTimes(startTime, endTime)
		})

		if (!isValid) {
			alert(
				'Please ensure that all start and end times are valid and that start times are before their respective end times.'
			)
			return
		}

		// Save the schedule here
		const formData = new FormData()

		formData.append('foodTruckId', selectedFoodTruck!.id)
		formData.append('schedules', JSON.stringify(schedules))

		fetcher.submit(formData, {
			method: 'post',
			replace: true,
			action: '/api/food-trucks/schedule',
		})
	}

	return (
		<>
			<TailwindContainer className="rounded-md">
				<div className="mt-8 px-4 py-10 sm:px-6 lg:px-8">
					<div className="sm:flex sm:flex-auto sm:items-center sm:justify-between">
						<div>
							<h1 className="text-lg font-semibold text-gray-900">
								Food Trucks
							</h1>
						</div>
						<div>
							<Button
								loading={isSubmitting}
								loaderPosition="left"
								onClick={() => handleModal.open()}
								variant="filled"
							>
								<PlusIcon className="h-4 w-4" />
								<span className="ml-2">Add</span>
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
												className="hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell"
											>
												Schedule
											</th>
											<th
												scope="col"
												className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
											></th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										{foodTrucks.map(ft => (
											<tr key={ft.id}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													<div className="flex items-center gap-3">
														<img
															src={ft.image}
															alt={ft.image}
															className="h-8 w-8 rounded-full border object-cover shadow-md"
														/>
														<p>{ft.name}</p>
													</div>
												</td>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
													{ft.schedule.length > 0 ? (
														<div className="flex flex-col gap-1">
															{ft.schedule.map(s => (
																<div
																	key={s.id}
																	className="flex items-center gap-2"
																>
																	<span className="text-sm font-semibold text-gray-900">
																		{s.day}:{' '}
																	</span>
																	<span className="text-sm font-medium text-gray-900">
																		{formatTime(s.startTime)} -{' '}
																		{formatTime(s.endTime)}
																	</span>
																</div>
															))}
														</div>
													) : (
														<span className="text-sm font-medium text-gray-900">
															No schedule
														</span>
													)}
												</td>
												<td className="relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0">
													<Button
														variant="subtle"
														onClick={() => {
															setSelectedFoodTruck(ft)
															handleScheduleModal.open()
														}}
													>
														Edit Schedule
													</Button>
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
				onClose={() => handleModal.close()}
				title="Add Food Truck"
				centered
				overlayBlur={1.2}
				overlayOpacity={0.6}
			>
				<fetcher.Form method="post" replace>
					<fieldset disabled={isSubmitting} className="flex flex-col gap-4">
						<TextInput
							name="name"
							label="Name"
							error={fetcher.data?.fieldErrors?.name}
							required
						/>

						<TextInput
							name="image"
							type="url"
							label="Image"
							error={fetcher.data?.fieldErrors?.image}
							required
						/>

						<Textarea
							name="description"
							label="Description"
							error={fetcher.data?.fieldErrors?.description}
							required
						/>

						<TextInput
							name="email"
							label="Email"
							type="email"
							error={fetcher.data?.fieldErrors?.email}
							required
						/>

						<PasswordInput
							name="password"
							label="Password"
							error={fetcher.data?.fieldErrors?.password}
							required
						/>

						<div className="mt-1 flex items-center justify-end gap-4">
							<Button
								variant="subtle"
								disabled={isSubmitting}
								onClick={() => handleModal.close()}
								color="red"
							>
								Cancel
							</Button>
							<Button
								type="submit"
								loading={isSubmitting}
								loaderPosition="right"
							>
								Create
							</Button>
						</div>
					</fieldset>
				</fetcher.Form>
			</Modal>

			<Modal
				opened={isScheduleModalOpen}
				onClose={() => handleScheduleModal.close()}
				title="Edit Schedule"
				centered
				overlayBlur={1.2}
				overlayOpacity={0.6}
			>
				<div>
					<div className="flex flex-col gap-4">
						<input hidden />
						{daysOfWeek.map(day => {
							const scheduleForDay = schedules.find(s => s.day === day)

							return (
								<div key={day} className="grid grid-cols-3 items-center gap-4">
									<p className="text-sm text-gray-900">{day}</p>
									<TimeInput
										format="12"
										name={`schedule.${day}.startTime`}
										label="Start Time"
										size="xs"
										clearable
										required
										value={
											scheduleForDay && new Date(scheduleForDay?.startTime)
										}
										onChange={value => {
											if (!scheduleForDay) {
												value.setHours(value.getHours() + 1)
											}
											updateSchedule(day, 'startTime', value)
										}}
									/>
									<TimeInput
										format="12"
										name={`schedule.${day}.endTime`}
										label="End Time"
										size="xs"
										clearable
										required
										value={scheduleForDay && new Date(scheduleForDay?.endTime)}
										onChange={value => {
											if (!scheduleForDay) {
												alert(
													'Please set a start time before setting the end time.'
												)
												return
											}

											updateSchedule(day, 'endTime', value)
										}}
									/>
								</div>
							)
						})}

						<div className="mt-1 flex items-center justify-end gap-4">
							<Button
								variant="subtle"
								disabled={isSubmitting}
								onClick={() => handleScheduleModal.close()}
								color="red"
							>
								Cancel
							</Button>
							<Button
								loading={isSubmitting}
								loaderPosition="right"
								onClick={validateAndSave}
							>
								Save
							</Button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}
