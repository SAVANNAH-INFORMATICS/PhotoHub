# PhotoSphere
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## 1. INTRODUCTION
This project, titled PhotoHub, was developed as part of the Savannah Informatics Frontend Engineer Assessment. PhotoHub is a responsive, full-stack web application designed to manage and view user information, albums, and photos. The application integrates an Angular-based frontend with a Node.js backend for authentication, while user, album, and photo data is dynamically fetched from the JSONPlaceholder API.( https://jsonplaceholder.typicode.com/)
PhotoHub provides the following core features:
1.	User Authentication: A secure login and signup system implemented using Node.js. Users can sign up with their full name, email, and password (with confirm password validation) and log in using their email/username and password.
2.	Dynamic Data Fetching: Real-time data retrieval for users, albums, and photos through the JSONPlaceholder (https://jsonplaceholder.typicode.com/) API, ensuring lightweight and efficient data handling.
3.	User-Friendly Interface: A polished, responsive frontend built with Angular, optimized for mobile, tablet, and desktop devices.
4.	CRUD Operations: Support for updating photo information, with changes reflected via PATCH requests to the backend.
Key Objectives:
1.	Demonstrate frontend development skills using Angular, including routing, state management, and reusable components.
2.	Implement backend authentication using Node.js for signup and login functionality.
3.	Fetch and integrate external data seamlessly from the JSONPlaceholder API.
4.	Ensure responsiveness, code quality, and deployment readiness of the application.
This documentation provides a comprehensive overview of PhotoHub, detailing the technologies used, application setup, structure, and implementation details.

## 2. TECHNOLOGIES USED
## Frontend-
Framewok: Angular version 17.3.11
Stacks: HTML5, CSS3, TypeScript
## Backend- 
Framework: Node JS version 18.13.0 with Express.js,
Stack: JavaScript
##Database:
 MySQL for authentication(Database Name =savannah, table=user), 
The est of the data is fetched from https://jsonplaceholder.typicode.com/

## Other libraries/tools:
 Angular Material UI library, Bootstrap


## 3. PROJECT SETUP
## a. Prerequisites
Node.js (version 18.13.0 or higher)
npm (version 10.3.0 and above): comes with Node.js
MySQL Database: Ensure a MySQL server is running locally or accessible remotely

## b.  Frontend Setuo
1. Clone the Repository from GitHub: 
git clone https://github.com/SAVANNAH-INFORMATICS/PhotoHub.git

2. Install Dependencies all required packages for the Angular application using: 
npm install

3. Run the Application to start the Angular development server:
npm run or ng serve commands

The application will be accessible at http://localhost:4200

4. Build for Production
npm run build
The build files will be available in the dist/ directory


## c. Backend Setup
1. Navigate to the backend directory
using the cd../savannah-backend  command

2. Install dependencies/all required packages for the Node.js server using:
npm install

## d. Database Configuration
Ensure the MySQL server is running
Create a database names savannah and a table named user using the following schema:

CREATE DATABASE savannah;
USE savannah;

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

## e. Environment Variables
Config the .env file in the backend directory with the following variables:

//Server
PORT = 8080

//Connection
DB_PORT = 3306
DB_HOST = localhost
DB_USERNAME = root
DB_PASSWORD =
DB_NAME = savannah

ACCESS_TOKEN = 0eb58ff228c5706750152837c27d38b1d2905e8be2690e1058453cb00372d70e376686a70606c5a15afe19dc7eb2758579bc302f8ec6886206bdec17692a8828


## f. Run the backend server
Start the Node.js server:
npm start
The backend API will be accessible at http://localhost:8080.

## g. Connecting Frontend to Backend
Update the API base URL in the Angular frontend application to match the backend URL:

## Production deployment
Deploy Frontend
Host the Angular build files on a platform like Vercel or Netlify.

Deploy Backend
Host the Node.js server on a platform like Heroku, AWS, or any cloud service provider that supports Node.js.

Update Environment Variables
Ensure the backend URL in the frontend matches the deployed backend server URL.


5. 






















## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
