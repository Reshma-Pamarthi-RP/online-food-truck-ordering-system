import {db} from '~/db.server'

export function getAllRestaurants() {
	return db.foodTruck.findMany({
		orderBy: {
			name: 'asc',
		},
		include: {
			items: true,
			schedule: true,
		},
	})
}
