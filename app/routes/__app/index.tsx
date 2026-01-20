import {Anchor} from '@mantine/core'
import {Link} from '@remix-run/react'
import {TailwindContainer} from '~/components/TailwindContainer'
import {useAppData} from '~/utils/hooks'
import {formatTime} from '~/utils/misc'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4 p-4">
			<RestaurantList />
		</div>
	)
}

function RestaurantList() {
	const {foodTrucks} = useAppData()

	return (
		<div className="bg-white">
			<TailwindContainer>
				<div className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
					<div className="md:flex md:items-center md:justify-between">
						<h2 className="mb-8 text-2xl font-extrabold tracking-tight text-gray-900">
							Food trucks
						</h2>
					</div>

					<div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-6 md:gap-y-0">
						{foodTrucks.map(ft => {
							return (
								<div
									key={ft.id}
									className="group relative mx-auto sm:mx-[unset]"
								>
									<div className="overflow-hidden rounded-md group-hover:opacity-75">
										<Link
											to={`/restaurants/${ft.slug}`}
											prefetch="intent"
											className="overflow-hidden rounded-lg group-hover:opacity-75"
										>
											<img
												src={ft.image}
												alt={ft.name}
												className="aspect-square h-28 w-28  rounded-md object-cover object-center"
											/>
										</Link>
									</div>

									<h3 className="mt-4 mb-2 text-base text-gray-700">
										<Anchor
											to={`/restaurants/${ft.slug}`}
											prefetch="intent"
											component={Link}
										>
											{ft.name}
										</Anchor>
									</h3>

									{ft.schedule.map((schedule, index) => (
										<div key={index}>
											<p className="text-sm">{schedule.day}</p>
											<p className="text-sm text-gray-500">
												{formatTime(schedule.startTime)} -{' '}
												{formatTime(schedule.endTime)}
											</p>
										</div>
									))}
								</div>
							)
						})}
					</div>
				</div>
			</TailwindContainer>
		</div>
	)
}
