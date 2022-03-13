import React, { useState, createContext } from 'react';
import axios from 'axios';
import { UserLoginData, State, AuthContextData } from '../types/auth';
import { SERVER_URL } from '../utils/constants';

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>(null);

export default function AuthProvider({ children }: Props) {
  const [state, setState] = useState<State>({
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  });

  const login = async (userData: UserLoginData) => {
    setState({ ...state, isLoading: true });
    
    const user = await axios.post(`${SERVER_URL}/auth/login`, userData);

    if (user) {
      setState({
        user: user.data,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      });
    } else {
      setState({
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: 'Login failed',
      });
    }
  };

  const logout = () => {
    setState({
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: '',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}