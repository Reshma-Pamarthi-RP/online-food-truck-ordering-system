import {faker} from '@faker-js/faker'
import {PrismaClient, Role} from '@prisma/client'
import * as bcrypt from 'bcryptjs'
import slugify from 'slugify'
import {createPasswordHash} from '~/utils/misc'

const db = new PrismaClient()

async function seed() {
	await db.item.deleteMany()
	await db.foodTruck.deleteMany()
	await db.user.deleteMany()
	await db.order.deleteMany()
	await db.itemOrder.deleteMany()
	await db.itemOrder.deleteMany()
	await db.invoice.deleteMany()

	await db.user.upsert({
		where: {
			email: 'user@app.com',
		},
		update: {},
		create: {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: 'user@app.com',
			passwordHash: await bcrypt.hash('password', 12),
		},
	})

	await db.user.create({
		data: {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: 'admin@app.com',
			passwordHash: await createPasswordHash('password'),
			role: Role.ADMIN,
		},
	})

	// for (const restaurant of restaurantSeedData) {
	const ft1 = await db.foodTruck.create({
		data: {
			name: 'Sloppy Sandwiches',
			slug: slugify('Sloppy Sandwiches', {lower: true, strict: true}),
			image:
				'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
			items: {
				create: [
					{
						name: 'Burger',
						image:
							'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
						price: Number(faker.finance.amount(5, 50, 2)),
						quantity: 1,
						slug: slugify('burger-20', {lower: true, strict: true}),
						description:
							'Sink your teeth into juicy perfection with our mouth-watering burgers, made to order and served fresh from our food truck!',
					},
					{
						name: 'Pizza',
						image:
							'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
						price: Number(faker.finance.amount(5, 50, 2)),
						quantity: 1,
						slug: slugify('pizza-02', {lower: true, strict: true}),
						description:
							'Hot, fresh, and always on-the-go: grab a slice of heaven from our sizzling food truck today!',
					},
					{
						name: 'Mac & Cheese',
						image:
							'https://plus.unsplash.com/premium_photo-1669687760005-89584766cd99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
						price: Number(faker.finance.amount(5, 50, 2)),
						quantity: 1,
						slug: slugify('Mac & Cheese-20', {lower: true, strict: true}),
						description:
							'Get your comfort food fix with our creamy, cheesy mac & cheese, made with love and ready to warm your soul from our food truck!',
					},
				],
			},
		},
	})

	const ft2 = await db.foodTruck.create({
		data: {
			name: 'Good Food on Wheels',
			slug: slugify('grab-on-wheels', {lower: true, strict: true}),
			image:
				'https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80',
			items: {
				create: [
					{
						name: 'Nachos',
						image:
							'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
						price: Number(faker.finance.amount(5, 50, 2)),
						quantity: 1,
						slug: slugify('Nachos-05', {lower: true, strict: true}),
						description:
							'Crunchy, cheesy, and loaded with flavor: our nachos are the ultimate snack to satisfy your cravings on-the-go from our food truck!',
					},
					{
						name: 'Tacos',
						image:
							'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
						price: Number(faker.finance.amount(5, 50, 2)),
						quantity: 1,
						slug: slugify('taco-s2', {lower: true, strict: true}),
						description:
							'Spice up your day with our delicious tacos, packed with fresh ingredients and bursting with authentic flavors from our food truck!',
					},
					{
						name: 'Mexican Rice',
						image:
							'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
						price: Number(faker.finance.amount(5, 50, 2)),
						quantity: 1,
						slug: slugify('mexican-rice', {lower: true, strict: true}),
						description:
							'Take your taste buds on a journey with our savory Mexican rice, a perfect side dish that will transport you straight to the heart of Mexico, from our food truck!',
					},
				],
			},
		},
	})

	await db.user.create({
		data: {
			email: 'staff01@app.com',
			firstName: 'FT1 Staff',
			lastName: 'FT1 Staff',
			passwordHash: await createPasswordHash('password'),
			role: 'STAFF',
			foodTruckId: ft1.id,
		},
	})

	await db.user.create({
		data: {
			email: 'staff02@app.com',
			firstName: 'FT2 Staff',
			lastName: 'FT2 Staff',
			passwordHash: await createPasswordHash('password'),
			role: 'STAFF',
			foodTruckId: ft2.id,
		},
	})

	await db.foodTruckSchedule.createMany({
		data: [
			{
				day: 'Monday',
				// convert 10am to date object
				startTime: new Date(Date.parse('2023-04-24T10:00:00')),
				endTime: new Date(Date.parse('2023-04-24T17:00:00')),
				foodTruckId: ft1.id,
			},
			{
				day: 'Wednesday',
				// convert 10am to date object
				startTime: new Date(Date.parse('2023-04-24T10:00:00')),
				endTime: new Date(Date.parse('2023-04-24T17:00:00')),
				foodTruckId: ft1.id,
			},
			{
				day: 'Friday',
				// convert 10am to date object
				startTime: new Date(Date.parse('2023-04-24T10:00:00')),
				endTime: new Date(Date.parse('2023-04-24T17:00:00')),
				foodTruckId: ft1.id,
			},
			{
				day: 'Sunday',
				// convert 10am to date object
				startTime: new Date(Date.parse('2023-04-24T10:00:00')),
				endTime: new Date(Date.parse('2023-04-24T17:00:00')),
				foodTruckId: ft1.id,
			},
		],
	})

	await db.foodTruckSchedule.createMany({
		data: [
			{
				day: 'Tuesday',
				startTime: new Date(Date.parse('2023-04-25T10:00:00')),
				endTime: new Date(Date.parse('2023-04-25T17:00:00')),
				foodTruckId: ft2.id,
			},
			{
				day: 'Thursday',
				startTime: new Date(Date.parse('2023-04-25T10:00:00')),
				endTime: new Date(Date.parse('2023-04-25T17:00:00')),
				foodTruckId: ft2.id,
			},
			{
				day: 'Saturday',
				startTime: new Date(Date.parse('2023-04-25T10:00:00')),
				endTime: new Date(Date.parse('2023-04-25T17:00:00')),
				foodTruckId: ft2.id,
			},
		],
	})

	// }

	console.log(`Database has been seeded. 🌱`)
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await db.$disconnect()
	})
