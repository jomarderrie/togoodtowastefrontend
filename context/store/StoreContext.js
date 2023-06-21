import React, { useEffect, useState } from "react";
import { storesPaginated } from "./Store";
import { SearchContext } from "../search/SearchContext";
export const RestaurantContext = React.createContext("restaurants");

export function RestaurantsContext({ children }) {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const {keyword, searchPagingParameters} = useContext(SearchContext)


    const retrieveStores = (keyword, searchPagingParameters) => {
    setIsLoading(true);
    setRestaurants([])
    storesPaginated()
  }

  useEffect(() => {

  }, [])

  return (
    <RestaurantContext.Provider  value={{
        retrieveStores,
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
}
