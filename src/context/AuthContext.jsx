import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the Context
const AuthContext = createContext(null);

// Utility function to simulate API latency
const simulateApiCall = (data, delay = 1000) => {
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
};

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Effect to check for persisted user data on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (e) {
                console.error("Error parsing stored user data:", e);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    // --- Authentication Functions ---

    const login = async (credentials) => {
        setLoading(true);
        try {
            // In a real application, this would be an Axios/Fetch call to your backend
            console.log("Attempting login for:", credentials.username);

            // Mock API response
            const response = await simulateApiCall({
                id: 101,
                username: credentials.username,
                email: `${credentials.username}@app.com`,
                token: 'mock-jwt-token-12345',
            });

            setUser(response);
            localStorage.setItem('user', JSON.stringify(response));
            return response;

        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Invalid credentials or server error.");
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            // Mock API response for registration
            const response = await simulateApiCall({
                id: 102,
                username: userData.username,
                email: userData.email,
                token: 'mock-jwt-token-new-user',
            });

            // Optionally log the user in immediately after registration
            setUser(response);
            localStorage.setItem('user', JSON.stringify(response));
            return response;

        } catch (error) {
            console.error("Registration failed:", error);
            throw new Error("Registration failed.");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        // Optionally clear other session data (e.g., cookies, global state)
    };

    // --- Context Value ---

    const contextValue = {
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
        register,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Custom Hook for easy consumption
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;