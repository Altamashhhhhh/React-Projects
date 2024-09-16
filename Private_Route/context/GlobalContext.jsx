// Import necessary modules from React
import { createContext, useState } from "react";

// Create the GlobalContext object to hold shared state
export const GlobalContext = createContext();

// Create the GlobalProvider component to wrap the entire application with context
export const GlobalProvider = ({ children }) => {

    // State to track whether the user is logged in or not
    const [isLogged, setIsLogged] = useState(false);
    
    // Object containing the state and its updater function, to be passed to the provider
    const values = {
        isLogged, // holds the login status
        setIsLogged // function to update login status
    };

    // Return the provider component which makes the state available to any child component
    return (
        <GlobalContext.Provider value={values}>
            {children} {/* Render any child components wrapped by GlobalProvider */}
        </GlobalContext.Provider>
    );
};
