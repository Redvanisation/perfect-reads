import React, { useState, createContext } from 'react';
import axios from 'axios';
import { UserLoginData, State, AuthContextData } from '../types/auth';
import { SERVER_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/slices/user/userSlice';

type Props = {
    children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>(null);

export default function AuthProvider({ children }: Props) {
    const dispatch = useDispatch();

    const [state, setState] = useState<State>({
        isLoggedIn: false,
        isLoading: false,
        error: null,
    });

    const login = async (userData: UserLoginData) => {
        setState({ ...state, isLoading: true });
        try {
            const response = await axios.post(`${SERVER_URL}/auth/login`, userData);

            if (response.status === 200 || response.status === 201) {
                dispatch(setUser(response.data));
                setState({
                    isLoggedIn: true,
                    isLoading: false,
                    error: null,
                });
            } else {
                setState({
                    isLoggedIn: false,
                    isLoading: false,
                    error: 'Login failed',
                });
            }
        } catch (error) {
            console.log('ERR', error);
            setState({
                isLoggedIn: false,
                isLoading: false,
                error: error as string,
            });
        }
    };

    const logout = () => {
        dispatch(clearUser());
        setState({
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
    );
}
