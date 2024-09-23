import React, { useState } from 'react';
import { createRecipe } from '../api'; // API integration
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CreateRecipePage = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new recipe object
    const recipeData = {
      title,
      ingredients: ingredients.split(','), // Split ingredients by commas
      instructions,
      cuisineType,
      cookingTime: parseInt(cookingTime), // Parse cooking time to an integer
    };

    try {
      // Call the API to create a new recipe
      await createRecipe(recipeData);
      
      // Show success message
      MySwal.fire({
        title: 'Recipe Created!',
        text: 'Your recipe has been successfully created.',
        icon: 'success',
        confirmButtonText: 'Okay',
      }).then(() => {
        // Redirect to home or another page after success
        navigate('/');
      });

    } catch (error) {
      // Show error message if creation fails
      MySwal.fire({
        title: 'Error',
        text: 'Failed to create recipe. Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Create Your Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <input
            id="ingredients"
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisineType">
            Cuisine Type
          </label>
          <input
            id="cuisineType"
            type="text"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookingTime">
            Cooking Time (minutes)
          </label>
          <input
            id="cookingTime"
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipePage;
