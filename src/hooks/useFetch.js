import { useState, useEffect } from 'react';

/**
 * A custom hook for fetching data from an API endpoint.
 * Handles loading state, data, and errors, and automatically cleans up requests on unmount.
 *
 * @param {string} url - The API endpoint URL.
 * @param {object} [options={}] - Standard fetch options (method, headers, body, etc.).
 * @returns {{ data: any, isLoading: boolean, error: Error | null }}
 */
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // We stringify options to use it as a dependency, ensuring the fetch runs if options change.
  const optionsString = JSON.stringify(options);

  useEffect(() => {
    if (!url) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        // Parse optionsString back to object
        const currentOptions = JSON.parse(optionsString);
        
        const response = await fetch(url, { ...currentOptions, signal });

        if (!response.ok) {
          let errorMessage = `HTTP error! Status: ${response.status}`;
          
          // Attempt to read JSON error body if available
          try {
            const errorBody = await response.json();
            if (errorBody && (errorBody.message || errorBody.error)) {
              errorMessage = errorBody.message || errorBody.error;
            }
          } catch (e) {
            // If JSON parsing fails, use the default status message
          }
          
          throw new Error(errorMessage);
        }

        const contentType = response.headers.get('content-type');
        let result;

        if (contentType && contentType.includes('application/json')) {
          result = await response.json();
        } else {
          // Handle non-JSON responses (e.g., text, HTML)
          result = await response.text();
        }

        setData(result);

      } catch (err) {
        if (err.name === 'AbortError') {
          // Request was intentionally cancelled (component unmount or dependency change)
          return;
        }
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function: abort the fetch request
    return () => {
      controller.abort();
    };
  }, [url, optionsString]);

  return { data, isLoading, error };
};

export default useFetch;