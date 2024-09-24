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

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/recipe-management-app.git
cd recipe-management-app
