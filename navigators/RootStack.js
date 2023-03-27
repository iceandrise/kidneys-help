import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Home from './../screens/Home';
import Options from './../screens/Options';
import Patients from '../screens/Patients';
import Terms from './../screens/Terms';
import Privacy from '../screens/Privacy';
import Calculator from '../screens/Calculator';
import ContactUs from '../screens/ContactUs';
import React from 'react';
import { Colors } from './../components/styles';
import { useAuthContext } from '../provider/AuthContext';

const { primary, tertiary } = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
  const { isAuthorized } = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        //general screen
        initialRouteName="Patients"
      >
        {isAuthorized ? (
          <Stack.Group>
            <Stack.Screen options={{ headerTintColor: primary }} name="Home" component={Home} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Options" component={Options} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="Privacy" component={Privacy} />
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="Patients" component={Patients} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
