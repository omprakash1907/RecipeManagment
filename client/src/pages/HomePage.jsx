import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipes } from "../api"; // Import the API function to get recipes

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [cuisineTypes, setCuisineTypes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");

  // Fetch recipes from API when component mounts
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const { data } = await fetchRecipes(); // Fetch the recipes from the backend
        setRecipes(data);
        setFilteredRecipes(data); // Initialize filtered recipes

        // Get all unique cuisine types for the dropdown
        const cuisines = [...new Set(data.map((recipe) => recipe.cuisineType))];
        setCuisineTypes(cuisines);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    loadRecipes();
  }, []);

  // Handle filtering when search title or cuisine type changes
  useEffect(() => {
    const filterRecipes = () => {
      let updatedRecipes = recipes;

      if (searchTitle) {
        updatedRecipes = updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
      }

      if (selectedCuisine) {
        updatedRecipes = updatedRecipes.filter(
          (recipe) => recipe.cuisineType === selectedCuisine
        );
      }

      setFilteredRecipes(updatedRecipes);
    };

    filterRecipes();
  }, [searchTitle, selectedCuisine, recipes]);

  return (
    <>
      <Banner />

      {/* Filter Bar */}
      <section className="container mx-auto py-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center">
          {/* Search by Title */}
          <div className="flex items-center space-x-2">
            <label htmlFor="searchTitle" className="font-semibold">
              Search by Title:
            </label>
            <input
              type="text"
              id="searchTitle"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
          </div>

          {/* Filter by Cuisine Type */}
          <div className="flex items-center space-x-2">
            <label htmlFor="cuisineType" className="font-semibold">
              Cuisine Type:
            </label>
            <select
              id="cuisineType"
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Cuisines</option>
              {cuisineTypes.map((cuisine, index) => (
                <option key={index} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              cuisineType={recipe.cuisineType}
              cookingTime={recipe.cookingTime}
              imageUrl="https://via.placeholder.com/300" // Replace with recipe image URL if available
              author={recipe.author.email}
              difficulty="Easy"
              recipeId={recipe._id} // Pass recipe ID for detail page
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
