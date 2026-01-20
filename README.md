# Online Food Truck Ordering System

The Online Food Truck Ordering System is a database-driven web application designed to streamline food truck operations and improve the customer ordering experience. The platform allows customers to browse food trucks, view menus, place orders, and track order status. Food truck owners and managers can manage schedules, menu items, employees, and daily business operations through a centralized system.

This project demonstrates practical experience in system design, database modeling, data integrity, and full-stack application planning suitable for real-world small business use cases.

## Project Goals

Food trucks often rely on manual or disconnected systems to take orders and manage schedules, which can lead to inefficiencies and errors. This project aims to:

* Digitize food truck ordering and management workflows
* Reduce manual errors through structured data modeling
* Provide a scalable foundation for future web or mobile applications
* Demonstrate strong database and application architecture skills

## Key Features

### Customer Features

* Browse available food trucks
* View menus with item details such as price, category, and availability
* Place food orders online
* Track order status

### Manager and Employee Features

* Create and manage food truck profiles
* Manage food truck schedules including location, day, and operating hours
* Manage menu items including pricing and quantities
* Assign and manage employees
* Maintain operational records

### System Capabilities

* Role-based access control for customers, managers, and employees
* Referential integrity using foreign key constraints
* Support for cascading updates and deletes
* Clean separation of entities for scalability and maintainability

## Core Database Entities

The system is built using a normalized database design with the following core entities:

* user
* manager_employee
* food_truck
* food_truck_schedule
* item
* order
* item_order

This structure ensures data consistency, scalability, and efficient querying.

## Technologies and Concepts Used

* Database-driven application design
* Relational data modeling and normalization
* CRUD operations
* Role-based access control design
* Web application and database integration
* MongoDB shell command usage as documented
* SQL-style constraints and relationship management concepts

## Documentation

Detailed system design, database structure, entity relationships, and example MongoDB shell commands are available in:

docs/Final-Report.docx

## Future Enhancements

* Payment gateway integration
* Real-time order status notifications
* Mobile-friendly user interface
* Analytics and reporting dashboard
* Authentication and authorization services

## Author

Developed as an academic and portfolio project to demonstrate database design, system architecture, and full-stack application planning skills.
