import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUtensils, faClock, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ title, cuisineType, cookingTime, imageUrl, author, difficulty, isMyFeed, onEdit, onDelete, recipeId }) => {
  const navigate = useNavigate(); // For navigation

  const handleLearnMore = () => {
    navigate(`/recipe/${recipeId}`); // Navigate to the recipe detail page
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Recipe Image */}
      <img src={`https://recipemanagment-z7iv.onrender.com${imageUrl}`} alt={title} className="w-full h-48 object-cover" />
      
      {/* Recipe Details */}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faUser} className="text-red-500" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faUtensils} className="text-red-500" />
            <span>{difficulty}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faClock} className="text-red-500" />
            <span>{cookingTime}min</span>
          </div>
        </div>
        
        {/* Recipe Title */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{cuisineType}</p>

        {/* Conditionally render Edit and Delete buttons if this is "My Feed" */}
        {isMyFeed ? (
          <div className="flex space-x-4">
            <button
              onClick={onEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" /> Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
            </button>
          </div>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
            onClick={handleLearnMore} // Learn More button navigates to the detail page
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
