# PhotoSphere
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

INTRODUCTION
This project, titled PhotoHub, was developed as part of the Savannah Informatics Frontend Engineer Assessment. PhotoHub is a responsive, full-stack web application designed to manage and view user information, albums, and photos. The application integrates an Angular-based frontend with a Node.js backend for authentication, while user, album, and photo data is dynamically fetched from the JSONPlaceholder API.( https://jsonplaceholder.typicode.com/)
PhotoHub provides the following core features:
•	User Authentication: A secure login and signup system implemented using Node.js. Users can sign up with their full name, email, and password (with confirm password validation) and log in using their email/username and password.
•	Dynamic Data Fetching: Real-time data retrieval for users, albums, and photos through the JSONPlaceholder (https://jsonplaceholder.typicode.com/) API, ensuring lightweight and efficient data handling.
•	User-Friendly Interface: A polished, responsive frontend built with Angular, optimized for mobile, tablet, and desktop devices.
•	CRUD Operations: Support for updating photo information, with changes reflected via PATCH requests to the backend.
Key Objectives:
1.	Demonstrate frontend development skills using Angular, including routing, state management, and reusable components.
2.	Implement backend authentication using Node.js for signup and login functionality.
3.	Fetch and integrate external data seamlessly from the JSONPlaceholder API.
4.	Ensure responsiveness, code quality, and deployment readiness of the application.
This documentation provides a comprehensive overview of PhotoHub, detailing the technologies used, application setup, structure, and implementation details.


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
