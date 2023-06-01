import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import  HomeNavigator  from "../../navigator/HomeNavigator";
import UserNavigator from "../../navigator/UserNavigator"
import { UserContext } from "../../context/UsersContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import Main from "../../navigator/MainNavigator";

export const Navigation = () => {
  const { isAuthenticated, setUser } = useContext(UserContext);

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('jwt')
      if(value !== null) {
        setUser(jwtDecode(value))
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

  return (
    <NavigationContainer>
      {isAuthenticated? <Main/>: <UserNavigator/>}
    </NavigationContainer>
  );
};
