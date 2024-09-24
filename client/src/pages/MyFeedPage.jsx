import React, { useState, useEffect } from 'react';
import { fetchRecipes, deleteRecipe } from '../api'; // Fetch and delete recipes from API
import RecipeCard from '../components/RecipeCard';
import { useNavigate } from 'react-router-dom'; // For navigating to edit page

const MyFeedPage = () => {
  const [recipes, setRecipes] = useState([]);
  const email = localStorage.getItem('email'); 
  const navigate = useNavigate();

  // Load recipes
  useEffect(() => {
    const loadMyRecipes = async () => {
      try {
        const { data } = await fetchRecipes(); 
        const userRecipes = data.filter((recipe) => recipe.author.email === email); 
        setRecipes(userRecipes);
      } catch (error) {
        console.error('Error fetching user recipes:', error);
      }
    };

    loadMyRecipes();
  }, [email]);

  const navigateHome = () => {
    navigate('/');
  };

  // Handle edit button click
  const handleEdit = (recipeId) => {
    // Navigate to the edit recipe page with the recipe ID
    navigate(`/editRecipe/${recipeId}`);
  };

  // Handle delete button click
  const handleDelete = async (recipeId) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteRecipe(recipeId); // Call API to delete recipe
        setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe._id !== recipeId)); // Update state
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Navbar at the top */}
      <nav className="flex justify-between items-center bg-blue-500 p-4 rounded-md shadow-md mb-6">
        <h1 className="text-white text-xl font-bold">My Recipe Feed</h1>
        <button
          onClick={navigateHome}
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Home
        </button>
      </nav>

      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <RecipeCard 
              key={index} 
              title={recipe.title} 
              cuisineType={recipe.cuisineType} 
              cookingTime={recipe.cookingTime} 
              imageUrl={recipe.imageUrl} 
              author={recipe.author.email}
              difficulty="Easy"
              isMyFeed={true} // Indicate this is the "My Feed" page
              onEdit={() => handleEdit(recipe._id)} // Pass the recipe ID to edit
              onDelete={() => handleDelete(recipe._id)} // Pass the recipe ID to delete
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default MyFeedPage;
