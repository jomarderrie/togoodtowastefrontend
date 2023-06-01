import React, { useState } from "react";
export const RestaurantContext = React.createContext("restaurants");

export function RestaurantsContext({ children }) {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
  
  return (
    <RestaurantContext.Provider  value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
}
