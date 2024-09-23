const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const recipeRoute = express.Router();


// Route to create a new recipe (Protected route - requires authentication)
recipeRoute.post('/', authMiddleware, createRecipe);

// Route to get all recipes (Public route)
recipeRoute.get('/', getRecipes);

// Route to get a recipe by ID (Public route)
recipeRoute.get('/:id', getRecipeById);

// Route to update a recipe (Protected route - requires authentication)
recipeRoute.put('/:id', authMiddleware, updateRecipe);

// Route to delete a recipe (Protected route - requires authentication)
recipeRoute.delete('/:id', authMiddleware, deleteRecipe);

module.exports = recipeRoute;