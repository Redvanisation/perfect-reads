import { useContext } from 'react';
import { AuthContextData } from '../types/auth';

export const useAuthUser = (userContext: any) => {
    const context: AuthContextData = useContext(userContext);

    if (!context) {
        throw new Error('useAuthUser must be used within an AuthProvider');
    }

    const { user, isLoggedIn, isLoading, error } = context.state;
    const { login, logout, resetLoginErrors } = context;

    return {
        user,
        isLoggedIn,
        isLoading,
        error,
        login,
        logout,
        resetLoginErrors,
    };
};
