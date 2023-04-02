import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButtonMore,
  StyledButtonMain,
  MenuButtonText,
  Line,
  MsgBox,
  StyledContainer,
  MenuImage,
  ActIcon,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MoreButtonText,
  ItemsView,
} from './../components/styles';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';
import theme from '../theme/theme';
import { ThemeContext } from 'styled-components';

const Home = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer style={[{ backgroundColor: theme.backgroundColor }]}>
      <StyledButtonMore onPress={() => navigation.navigate('Options')}>
          <MoreButtonText>More</MoreButtonText>
        </StyledButtonMore>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer>
      <WelcomeContainer2 style={[{ backgroundColor: theme.backgroundColor }]}>
        <ItemsView>
          <StyledButtonMain onPress={() => navigation.navigate('Calculator')}>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/calculator.png')} />
            <MenuButtonText>Calculators</MenuButtonText>
          </StyledButtonMain>
          <StyledButtonMain onPress={() => navigation.navigate('Patients')}>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/patient.png')} />
            <MenuButtonText>My patients</MenuButtonText>
          </StyledButtonMain>
        </ItemsView>
        <ItemsView>
          <StyledButtonMain>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/research.png')} />
            <MenuButtonText>Dynamics</MenuButtonText>
          </StyledButtonMain>
          <StyledButtonMain>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/user.png')} />
            <MenuButtonText>Personal Info</MenuButtonText>
          </StyledButtonMain>
        </ItemsView>
        <ItemsView>
          <StyledButtonMain>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/info.png')} />
            <MenuButtonText>Help with app</MenuButtonText>
          </StyledButtonMain>
          <StyledButtonMain onPress={() => navigation.navigate('Payment')}>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/payment.png')} />
            <MenuButtonText>Payment</MenuButtonText>
          </StyledButtonMain>
        </ItemsView>
      </WelcomeContainer2>
    </>
  );
};

export default Home;
