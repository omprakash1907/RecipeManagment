import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Retrieve username and token from localStorage
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <div className="text-white text-3xl font-bold flex items-center">
          <span className="font-bold text-4xl">Food</span>
          <span className="text-yellow-400 font-bold text-4xl">.</span>
        </div>
        
        {/* Right Side */}
        <div className="flex space-x-4">
          {token ? (
            <>
              {/* Username and Logout */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                  {getInitials(email)} {/* Display first letter of username */}
                </div>
                <span className="text-white text-lg">{email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-white text-lg hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
              </button>
            </>
          ) : (
            <>
              {/* Login and Signup */}
              <Link to="/login" className="text-white text-lg hover:text-gray-300">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
              </Link>
              <Link to="/signup" className="text-white text-lg hover:text-gray-300">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
