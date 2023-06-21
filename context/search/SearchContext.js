import React, { useState, useEffect } from "react";


export const SearchContext = React.createContext();

export const SearchContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("Amsterdam");
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState("");
    const [searchPagingParameters, setSearchPagingParameters] = useState("");
    const [error,setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }
    
    useEffect(() => {
      if(!keyword.length){
        return;
      }
      console.log(keyword);
     
    }, [keyword])
    
    return (
        <SearchContext.Provider value={{isLoading, keyword, error, onSearch, location,setLocation, setError, searchPagingParameters, setSearchPagingParameters }}>
        {children}
        </SearchContext.Provider>
    )
}