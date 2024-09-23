const Recipe = require('../models/recipeModel');

const createRecipe = async (req, res) => {
    const { title, ingredients, instructions, cuisineType, cookingTime } = req.body;
    try {
        const recipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            cuisineType,
            cookingTime,
            author: req.userId
        });
        res.status(201).json(recipe);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateRecipe = async (req, res) => {
    const { title, ingredients, instructions, cuisineType, cookingTime } = req.body;
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, {
            title,
            ingredients,
            instructions,
            cuisineType,
            cookingTime
        }, { new: true });
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe };
