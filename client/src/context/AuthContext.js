import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

// Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Reducer to manage auth state
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: LOGIN, payload: user });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
