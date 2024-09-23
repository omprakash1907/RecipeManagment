import React, { useState } from "react";
import { registerUser } from "../api";  
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle, faAmazon } from "@fortawesome/free-brands-svg-icons";
import Swal from 'sweetalert2';  
import withReactContent from 'sweetalert2-react-content';  

const MySwal = withReactContent(Swal);  
const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({ username, email, password });
      localStorage.setItem('token', data.token);  
      
      // Show success alert
      MySwal.fire({
        title: 'Signup Successful!',
        text: 'You have successfully registered.',
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then(() => {
        navigate("/login");  
      });
      
    } catch (err) {
      // Show error alert
      MySwal.fire({
        title: 'Signup Failed',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'Retry'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full relative">
        <h2 className="text-center text-2xl font-bold mb-6">SIGN UP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-semibold">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Your Username"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
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
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
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
            SIGN UP
          </button>
        </form>

        <div className="mt-6 text-center text-sm">OR CONTINUE WITH</div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="text-black text-2xl"><FontAwesomeIcon icon={faApple} /></button>
          <button className="text-blue-600 text-2xl"><FontAwesomeIcon icon={faFacebook} /></button>
          <button className="text-red-500 text-2xl"><FontAwesomeIcon icon={faGoogle} /></button>
          <button className="text-orange-500 text-2xl"><FontAwesomeIcon icon={faAmazon} /></button>
        </div>

        <div className="text-center mt-6 text-sm">
          Already have an account? <Link to={"/login"} className="text-blue-500">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
