# Recipe Management Application

## Overview

The Recipe Management Application is a full-stack web app that allows users to create, view, edit, and delete recipes. It features user authentication using JSON Web Tokens (JWT) and provides functionality for uploading recipe images. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and is fully responsive.

## Features

- **User Authentication**: Users can register and log in to manage their recipes.
- **Create Recipe**: Authenticated users can create new recipes with a title, ingredients, instructions, cuisine type, cooking time, and image upload.
- **View Recipes**: Users can browse through recipes with filtering based on user-specific recipes or all recipes.
- **Edit Recipe**: Users can edit their own recipes.
- **Delete Recipe**: Users can delete their own recipes.
- **Responsive Design**: The application is designed to be fully responsive on all devices.
- **Image Upload**: Users can upload an image for each recipe.

## Technology Stack

### Frontend
- **React.js**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the backend.
- **React Router**: For handling navigation within the app.

### Backend
- **Node.js & Express.js**: Backend runtime and framework for handling API requests.
- **MongoDB & Mongoose**: Database and ORM for managing recipe and user data.
- **Multer**: Middleware for handling image uploads.
- **JWT**: Used for user authentication.

## Deployment

- **Frontend**: The frontend is deployed on Vercel.
  - [Recipe Management Frontend](https://recipe-managment.vercel.app/)

- **Backend**: The backend is deployed on Render.
  - [Recipe Management Backend API](https://recipemanagment-z7iv.onrender.com/api/recipes)

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/recipe-management-app.git
cd recipe-management-app
2. Install dependencies for both frontend and backend
Install Backend Dependencies:
bash
Copy code
cd backend
npm install
Install Frontend Dependencies:
bash
Copy code
cd frontend
npm install
3. Set up environment variables
Create a .env file in the backend folder and add the following:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run the application
Run Backend:
bash
Copy code
cd backend
npm run dev
Run Frontend:
bash
Copy code
cd frontend
npm start
5. Access the application
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api/recipes
API Endpoints
Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in a user
Recipe Management
GET /api/recipes: Fetch all recipes
GET /api/recipes/:id: Fetch a specific recipe by ID
POST /api/recipes: Create a new recipe (requires authentication)
PUT /api/recipes/:id: Update an existing recipe (requires authentication)
DELETE /api/recipes/:id: Delete a recipe (requires authentication)



Future Enhancements
Add advanced search and filtering options for recipes.
Allow users to leave comments or ratings on recipes.
Add social sharing functionality.
