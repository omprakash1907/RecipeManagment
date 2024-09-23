import React, { useState } from "react";
import { loginUser } from "../api";  
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle, faAmazon } from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';  
import withReactContent from 'sweetalert2-react-content';  

const MySwal = withReactContent(Swal); 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('token', data.token);  // Store token in localStorage
      localStorage.setItem('email', email);  // Store username in localStorage
      // Show success alert
      MySwal.fire({
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then(() => {
        navigate("/");  
      });
      
    } catch (err) {
      // Show error alert
      MySwal.fire({
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full relative">
        <h2 className="text-center text-2xl font-bold mb-6">LOG IN</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                SHOW
              </button>
            </div>
          </div>
          <button
            type="submit"
             className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            LOG IN
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">Or Continue with</div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="text-black text-2xl"><FontAwesomeIcon icon={faApple} /></button>
          <button className="text-blue-600 text-2xl"><FontAwesomeIcon icon={faFacebook} /></button>
          <button className="text-red-500 text-2xl"><FontAwesomeIcon icon={faGoogle} /></button>
          <button className="text-orange-500 text-2xl"><FontAwesomeIcon icon={faAmazon} /></button>
        </div>

        <div className="text-center mt-6 text-sm">
          Don’t have an account yet? <Link to={'/signup'} href="#" className="text-blue-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
