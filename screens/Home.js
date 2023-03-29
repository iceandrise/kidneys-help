import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
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
  Avatar,
  ItemsView,
} from './../components/styles';

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <MenuImage source={require('./../assets/image/menu.png')} />
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer>
      <WelcomeContainer2>
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
          <StyledButtonMain>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/payment.png')} />
            <MenuButtonText>Payment</MenuButtonText>
          </StyledButtonMain>
        </ItemsView>
      </WelcomeContainer2>
    </>
  );
};

export default Home;
