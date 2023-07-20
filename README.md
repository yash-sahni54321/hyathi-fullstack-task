# Adopt Pokemons MERN Website

This is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) for adopting Pokemons. Users can view available Pokemons, search for specific ones, and adopt their favorite Pokemons.

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [User Routes](#user-routes)
6. [Functionalities](#functionalities)
7. [Contributing](#contributing)
8. [License](#license)

## Description

The Adopt Pokemons MERN Website is a platform that allows users to find and adopt their favorite Pokemons. The application uses the MERN stack and is built with React.js for the front-end, Node.js and Express.js for the server, and MongoDB for the database.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yash-sahni54321/hyathi-fullstack-task.git`
2. Navigate to the project directory: `cd hyathi-fullstack-task`
3. Install the dependencies for the server: `cd backend`
4. Navigate to the client directory: `cd frontend`
5. Install the dependencies for the client and server: `npm install`
6. Start the client : `npm start`
7. Start the development server: `npx nodemon server.js`

## Usage

Once the server and client are running, open your web browser and navigate to `http://localhost:3000` to access the Adopt Pokemons website. 
Backend : (https://adoptpokemon-backend.onrender.com/)
## API Endpoints

The following API endpoints are available in the project:

1. `GET [/api/v1/pokemons](https://adoptpokemon-backend.onrender.com/api/v1/pokemons)`: Get a list of all available Pokemons.
2. `GET [/api/v1/pokemons/:id](https://adoptpokemon-backend.onrender.com/api/v1/pokemon/64a70b4d7db1f36b174e4b79)`: Get details of a specific Pokemon by ID.
3. `POST [/api/v1/admin/pokemon/new](https://adoptpokemon-backend.onrender.com/api/v1/pokemon/new)`: Create a new Pokemon for adoption.
4. `PUT [/api/v1/pokemon/:id](https://adoptpokemon-backend.onrender.com/api/v1/pokemon/64a70b4d7db1f36b174e4b79)`: Feed a specific Pokemon by ID.
5. `Decrease Health using node cron`
6. `GET [/api/v1/pokemon/adopt/:id](https://adoptpokemon-backend.onrender.com/api/v1/pokemon/adopt/64b029874bd1f33fee13281e)` : Adopt a Pokemon by its id.
7. `GET [/api/v1/pokemon/me/pokemons](https://adoptpokemon-backend.onrender.com/api/v1/me/pokemons)` : Get my Pokemons
8. `DELETE /api/v1/admin/pokemon/:id`: Delete a Pokemon by ID.

## User Routes

The following user-related API endpoints are available:

1. `POST [/api/v1/register](https://adoptpokemon-backend.onrender.com/api/v1/register)`: Register a new user.
2. `POST [/api/v1/login](https://adoptpokemon-backend.onrender.com/api/v1/login)`: Log in an existing user.
4. `GET [/api/v1/me](https://adoptpokemon-backend.onrender.com/api/v1/me)`: Profile information of the currently logged-in user.
5. `GET [/api/v1/logout](https://adoptpokemon-backend.onrender.com/api/v1/logout)`: Log out the currently logged-in user.

## Functionalities

The Adopt Pokemons MERN Website offers the following functionalities:

1. **View All Pokemons**: Users can view a list of all available Pokemons for adoption.
2. **Search**: Users can search for specific Pokemons using a search bar.
3. **Pokemon Details**: Users can view detailed information about each Pokemon.
4. **Adoption**: Users can adopt their favorite Pokemons through the adoption process.
5. **User Registration and Login**: Users can register and log in to the website to access personalized features.
6. **User Profile**: Users have a profile page where they can view and update their information.


![Postman](postmanApiCapture.PNG)

## Screen Shots of working project.

Home Page

![HomePage](Home.PNG)

Profile Page

![ProfilePage](ProfilePage.PNG)

Dasboard

![Dasboard](DashBoard.PNG)

Product Detail

![ProductDetails](DetailBeforeLogin.PNG)

![ProductDetails](DetailPageAfterLogin.PNG)
