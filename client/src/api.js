import axios from 'axios';

// Set the base URL for all requests
const API = axios.create({
  baseURL: 'https://recipemanagment-z7iv.onrender.com/api',  // Your backend API base URL
});

// Add token to the request if the user is authenticated
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Example: Fetch all recipes
export const fetchRecipes = () => API.get('/recipes');

// Example: Fetch a specific recipe by ID
export const fetchRecipeById = (id) => API.get(`/recipes/${id}`);

// Example: Create a new recipe
export const createRecipe = (recipeData) => API.post('/recipes', recipeData);

// Example: Update a recipe by ID
export const updateRecipe = (id, updatedData) => API.put(`/recipes/${id}`, updatedData);

// Example: Delete a recipe by ID
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);

// Example: Register a new user
export const registerUser = (userData) => API.post('/auth/register', userData);

// Example: Login a user
export const loginUser = (userData) => API.post('/auth/login', userData);

// Example: Fetch current user profile
export const getUserProfile = () => API.get('/auth/profile');
