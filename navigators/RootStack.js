import { NavigationContainer, DarkTheme } from '@react-navigation/native';
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
import AddPatient from '../screens/AddPatient';
import Chart from '../screens/Chart';
import Settings from '../screens/Settings';
import React, { useState, useEffect } from 'react';
import { Colors } from './../components/styles';
import { useAuthContext } from '../provider/AuthContext';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import { DefaultTheme } from 'react-native-paper';
import Payment from '../screens/Payment';
import TwucCalc from '../screens/TwucCalc';
import Premium from '../screens/Premium';
import Diary from '../screens/Diary';
import Results from '../screens/Results';
import Result from '../screens/Result';
import Daugirdas from '../screens/Daugirdas';
import Watson from '../screens/Watson';
import HumeWeyers from '../screens/Hume-Weyers';
import MellitsCheek from '../screens/Mellits-Cheek';
import { DUAGIRDAS_CALC, HUME_WEYERS_CALC, MELLITS_CHECK_CALC, WATSON_CALC } from '../constant';
import DaugirdasResults from '../screens/DaugirdasResults';
import HumeWeyersResults from '../screens/HumeWeyersResults';
import MellitsCheekResults from '../screens/MellitsCheekResults';
import WatsonResults from '../screens/WatsonResults';
import { LiquidChart } from '../screens/LiquidChart';
import { PreasureChart } from '../screens/PreasureChart';
import { WeightChart } from '../screens/WeightChart';

const { primary, tertiary } = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
  const { isAuthorized } = useAuthContext();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
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
          initialRouteName="Home"
        >
          {isAuthorized ? (
            <Stack.Group>
              <Stack.Screen options={{ headerTintColor: primary }} name="Home" component={Home} />
              {/* <Stack.Screen name="Signup" component={Signup} /> */}
              <Stack.Screen name="Options" component={Options} />
              <Stack.Screen name="Terms" component={Terms} />
              <Stack.Screen name="Privacy" component={Privacy} />
              <Stack.Screen name="Calculator" component={Calculator} />
              <Stack.Screen name="Patients" component={Patients} options={{}} />
              <Stack.Screen name="ContactUs" component={ContactUs} />
              <Stack.Screen name="AddPatient" component={AddPatient} />
              <Stack.Screen name="Chart" component={Chart} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="TwucCalc" component={TwucCalc} />
              <Stack.Screen name="Premium" component={Premium} />
              <Stack.Screen name="Diary" component={Diary} />
              <Stack.Screen name="Results" component={Results} />
              <Stack.Screen name="Result" component={Result} />
              <Stack.Screen name="Daugirdas" component={Daugirdas} />
              <Stack.Screen name={DUAGIRDAS_CALC} component={DaugirdasResults} />
              <Stack.Screen name="Watson" component={Watson} />
              <Stack.Screen name={WATSON_CALC} component={WatsonResults} />
              <Stack.Screen name="HumeWeyers" component={HumeWeyers} />
              <Stack.Screen name={HUME_WEYERS_CALC} component={HumeWeyersResults} />
              <Stack.Screen name="MellitsCheek" component={MellitsCheek} />
              <Stack.Screen name={MELLITS_CHECK_CALC} component={MellitsCheekResults} />
              {/* Charts */}
              <Stack.Screen name="LiquidChart" component={LiquidChart} />
              <Stack.Screen name="PreasureChart" component={PreasureChart} />
              <Stack.Screen name="WeightChart" component={WeightChart} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
              {/* <Stack.Screen options={{ headerTintColor: primary }} name="Home" component={Home} /> */}
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default RootStack;
