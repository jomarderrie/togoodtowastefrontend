import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from "./HomeNavigator";
import { RestaurantContext } from "../context/store/StoreContext";
import { SearchContextProvider } from "../context/search/SearchContext";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <SearchContextProvider>
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: "#e91e63",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
        </SearchContextProvider>
    );
};

export default Main;
