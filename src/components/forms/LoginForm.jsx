import React, { useState, useCallback } from 'react';

/**
 * LoginForm Component
 * Handles user authentication input (Email and Password).
 * Features state management, simulated API submission, loading states, and error handling.
 */
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // --- Simulated API Call ---
      // Replace this block with actual API integration (e.g., Axios call)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulated success/failure logic
      if (formData.email === 'user@example.com' && formData.password === 'password123') {
        console.log("Login Successful:", formData);
        // Success action: Redirect or update global auth state
      } else {
        throw new Error("Invalid email or password.");
      }
      // --------------------------

    } catch (err) {
      setError(err.message || "An unexpected error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 transition duration-300 hover:shadow-blue-500/20"
      >
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center tracking-wider">
          Secure Login
        </h2>

        {/* Error Display */}
        {error && (
          <div className="p-3 mb-4 text-sm text-red-300 bg-red-900 border border-red-700 rounded-lg" role="alert">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
            autoComplete="email"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-150 shadow-inner"
            aria-label="Email Address"
          />
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
            autoComplete="current-password"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition duration-150 shadow-inner"
            aria-label="Password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-bold text-lg transition duration-300 ease-in-out shadow-md ${
            isLoading
              ? 'bg-blue-600 cursor-not-allowed opacity-70'
              : 'bg-blue-700 hover:bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              {/* Simple Loading Spinner SVG */}
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Authenticating...
            </span>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;