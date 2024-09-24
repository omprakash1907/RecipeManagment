import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api'; // Import the API function to fetch recipe by ID

const RecipeDetailPage = () => {
  const { recipeId } = useParams(); // Get the recipe ID from the URL params
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const { data } = await fetchRecipeById(recipeId); // Fetch recipe details by ID
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      }
    };

    loadRecipe();
  }, [recipeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={`https://recipemanagment-z7iv.onrender.com${recipe.imageUrl}`} 
        alt={recipe.title}
        className="w-full h-65 object-cover mb-4"
      />
      <p className="text-lg mb-4"><strong>Cuisine Type:</strong> {recipe.cuisineType}</p>
      <p className="text-lg mb-4"><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <p className="text-lg mb-4"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p className="text-lg mb-4"><strong>Instructions:</strong> {recipe.instructions}</p>
      <p className="text-lg mb-4"><strong>Author:</strong> {recipe.author.email}</p>
    </div>
  );
};

export default RecipeDetailPage;
