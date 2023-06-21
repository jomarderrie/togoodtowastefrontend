import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import  HomeNavigator  from "../../navigator/HomeNavigator";
import UserNavigator from "../../navigator/UserNavigator"
import { UserContext } from "../../context/users/UsersContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import Main from "../../navigator/MainNavigator";

export const Navigation = () => {
  const { isAuthenticated, setUser } = useContext(UserContext);

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async () => {
    console.log("getting called");
    const value = await AsyncStorage.getItem('jwt')
    console.log(value);
    try {
      // added login call
      // await loginUser(email, password).then((resp,err) => {
      // console.log(resp);
      // })
      const value = await AsyncStorage.getItem('jwt')
      console.log(value);
      if(value !== null) {
        // console.log(value)
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
