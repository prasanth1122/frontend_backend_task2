import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Create the Navigation Context
const NavigationContext = createContext();

// Create a provider component
export function NavigationProvider({ children }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <NavigationContext.Provider
      value={{
        handleNavigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children are required and are of type node
};

// Custom hook for consuming the navigation context
export function useNavigation() {
  return useContext(NavigationContext);
}
