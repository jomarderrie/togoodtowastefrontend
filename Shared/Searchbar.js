import { View } from "native-base"
import { useContext, useEffect, useState } from "react"
import { Searchbar } from "react-native-paper";
import { SearchContext } from "../context/search/SearchContext";
import styled from "styled-components/native";

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;


export const Search = () => {
    const {keyword, search} = useContext(SearchContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
      setSearchKeyword(keyword)
    }, [keyword])
    
    return (
        <SearchContainer>
                <Searchbar  
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}/>
        </SearchContainer>
    )
}