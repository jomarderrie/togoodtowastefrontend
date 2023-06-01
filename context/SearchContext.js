import React, { useState, useEffect } from "react";


export const SearchContext = React.createContext();

export const SearchContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("Amsterdam");
    const [isLoading, setIsLoading] = useState(false);
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
        <SearchContext.Provider value={{isLoading, keyword, error, onSearch}}>
        {children}
        </SearchContext.Provider>
    )
}