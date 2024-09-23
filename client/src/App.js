import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRouting';
import SignupPage from './pages/SignupPage';
import CreateRecipePage from './pages/CreateRecipePage';
import MyFeedPage from './pages/MyFeedPage'; 
import EditRecipePage from './pages/EditRecipePage'; // Import the new Edit page
import RecipeDetailPage from './pages/RecipeDetailPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/createRecipe" element={<PrivateRoute><CreateRecipePage /></PrivateRoute>} />
        <Route path="/myFeed" element={<PrivateRoute><MyFeedPage /></PrivateRoute>} />
        <Route path="/editRecipe/:id" element={<PrivateRoute><EditRecipePage /></PrivateRoute>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
