import React, { useState, useEffect } from 'react';
import { fetchRecipeById, updateRecipe } from '../api'; // API integration for fetching and updating
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditRecipePage = () => {
  const { id } = useParams(); // Recipe ID from URL
  const navigate = useNavigate();
  
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cuisineType: '',
    cookingTime: '',
  });

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const { data } = await fetchRecipeById(id); // Fetch the recipe by ID
        setRecipe({
          ...data,
          ingredients: data.ingredients.join(', ') // Convert array to comma-separated string
        });
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    loadRecipe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRecipe = {
        ...recipe,
        ingredients: recipe.ingredients.split(',').map((ingredient) => ingredient.trim()) // Convert back to array
      };
      await updateRecipe(id, updatedRecipe); // Update recipe via API
      Swal.fire('Success', 'Recipe updated successfully!', 'success');
      navigate('/myFeed'); // Redirect to MyFeed after success
    } catch (error) {
      console.error('Error updating recipe:', error);
      Swal.fire('Error', 'Failed to update recipe.', 'error');
    }
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Edit Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients (comma-separated)</label>
          <input
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Instructions</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cuisine Type</label>
          <input
            type="text"
            name="cuisineType"
            value={recipe.cuisineType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Cooking Time (minutes)</label>
          <input
            type="number"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipePage;
