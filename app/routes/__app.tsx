import {Anchor, Button, ScrollArea} from '@mantine/core'
import type {LoaderArgs, SerializeFrom} from '@remix-run/node'
import {json, redirect} from '@remix-run/node'
import {Form, Link, Outlet, useLocation} from '@remix-run/react'
import appConfig from 'appConfig'
import {TailwindContainer} from '~/components/TailwindContainer'
import {getAllRestaurants} from '~/lib/restaurant.server'
import {isAdmin, isStaff, requireUserId} from '~/session.server'
import {useOptionalUser} from '~/utils/hooks'

export type AppLoaderData = SerializeFrom<typeof loader>
export const loader = async ({request}: LoaderArgs) => {
	await requireUserId(request)

	if (await isAdmin(request)) {
		return redirect('/admin')
	} else if (await isStaff(request)) {
		return redirect('/staff')
	}

	const foodTrucks = await getAllRestaurants()
	const items = foodTrucks.reduce((acc, restaurant) => {
		restaurant.items.forEach(item => acc.push(item))
		return acc
	}, [] as typeof foodTrucks[number]['items'])

	return json({foodTrucks: foodTrucks, items})
}

export default function AppLayout() {
	return (
		<>
			<div className="flex h-full flex-col">
				<HeaderComponent />
				<ScrollArea classNames={{root: 'flex-1 bg-gray-100'}}>
					<Content />
				</ScrollArea>

				<FooterComponent />
			</div>
		</>
	)
}

function HeaderComponent() {
	const location = useLocation()
	const {user} = useOptionalUser()

	return (
		<>
			<Form replace action="/api/auth/logout" method="post" id="logout-form" />
			<header className="max-h-16 ">
				<TailwindContainer>
					<div className="flex h-full w-full items-center justify-between">
						<div className="flex flex-shrink-0 items-center gap-4">
							<Anchor component={Link} to="/">
								<img
									className="h-16 bg-black object-cover object-center"
									src={appConfig.logo}
									alt="Logo"
								/>
							</Anchor>
						</div>

						<div className="flex items-center gap-4">
							<Button px={8} component={Link} to="/cart" title="Cart" compact>
								Cart
							</Button>

							{user ? (
								<>
									<Button component={Link} to="/order-history" compact>
										Your orders
									</Button>

									<Button type="submit" form="logout-form" compact>
										Logout
									</Button>
								</>
							) : (
								<>
									<Button
										compact
										component={Link}
										to={`/login?redirectTo=${encodeURIComponent(
											location.pathname
										)}`}
									>
										Login
									</Button>
								</>
							)}
						</div>
					</div>
				</TailwindContainer>
			</header>
		</>
	)
}

function Content() {
	return (
		<main>
			<Outlet />
		</main>
	)
}

function FooterComponent() {
	return (
		<footer>
			<span className="text-gray-400"></span>
		</footer>
	)
}
