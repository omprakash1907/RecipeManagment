const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const upload = require('../middleware/upload')

const recipeRoute = express.Router();

// Route to create a new recipe with an image
recipeRoute.post('/', authMiddleware, upload.single('image'), createRecipe);

// Route to get all recipes (Public route)
recipeRoute.get('/', getRecipes);

// Route to get a recipe by ID
recipeRoute.get('/:id', getRecipeById);

// Route to update a recipe with an image
recipeRoute.put('/:id', authMiddleware, upload.single('image'), updateRecipe);

// Route to delete a recipe
recipeRoute.delete('/:id', authMiddleware, deleteRecipe);

module.exports = recipeRoute;
