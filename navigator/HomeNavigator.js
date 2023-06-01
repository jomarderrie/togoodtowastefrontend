import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import Home from '../screens/home/Home';


const HomeStack = createStackNavigator()

function MyStack() {
    return (
        <HomeStack.Navigator headerMode="false"
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
        }}>
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