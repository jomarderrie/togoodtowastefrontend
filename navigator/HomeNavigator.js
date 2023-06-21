import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import Home from '../screens/home/screens/Home';


const HomeStack = createStackNavigator()

function MyStack() {
    return (
        <HomeStack.Navigator 
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
        }} options={{ headerMode:false}}>
            <HomeStack.Screen
                name="Home2"
                component={Home}
                options={{
                    headerShown:false
                }}/>
        </HomeStack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />;
}