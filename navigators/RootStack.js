import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';
import React from 'react';
import {Colors} from './../components/styles'

const {primary, tertiary} = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle:{
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen options={{headerTintColor: primary}} name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;