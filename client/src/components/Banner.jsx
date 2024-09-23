import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by checking if the token exists in localStorage
  const token = localStorage.getItem("token");

  // Handle the "Create Recipe" button click
  const handleCreateRecipeClick = () => {
    if (token) {
      // If the user is logged in, navigate to the "Create Recipe" page
      navigate("/createRecipe");
    } else {
      // If the user is not logged in, navigate to the "Login" page
      navigate("/login");
    }
  };

  // Handle the "My Feed" button click
  const handleMyFeedClick = () => {
    if (token) {
      // Navigate to the "My Feed" page if the user is logged in
      navigate("/myFeed");
    } else {
      // Redirect to login page if not logged in
      navigate("/login");
    }
  };

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto relative flex items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="max-w-lg">
          <span className="text-green-600 font-semibold text-sm uppercase">
            Baked Goods
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Welcome to our Recipe Management website!
          </h1>

          {/* Show the Create Recipe button */}
          <button
            className="bg-red-500 text-white px-6 py-3 mt-6 text-lg rounded-md shadow-lg hover:bg-red-600 transition-all flex items-center"
            onClick={handleCreateRecipeClick}
          >
            <FontAwesomeIcon icon={faUtensils} className="mr-2" />
            Create Recipe
          </button>

          {/* Conditionally show the "My Feed" button if the user is logged in */}
          {token && (
            <button
              className="bg-blue-500 text-white px-6 py-3 mt-4 text-lg rounded-md shadow-lg hover:bg-blue-600 transition-all flex items-center"
              onClick={handleMyFeedClick}
            >
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              My Feed
            </button>
          )}
        </div>

        {/* Right Side - Image and Extra Info */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="Dish"
            className="rounded-lg shadow-md object-cover h-80 w-80"
          />

          {/* Time Tag */}
          <div className="absolute bottom-0 left-0 transform translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
            <div className="flex items-center justify-center text-red-500 font-semibold">
              <span className="text-sm">30min</span>
            </div>
          </div>

          {/* Super Easy Tag */}
          <div className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full shadow-md">
            <span className="text-xs font-semibold">supereasy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
