import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity } from 'react-native';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  StyledButtonCalc,
  CalcButtonText,
  StyledButtonPremium,
  MsgBox,
  StyledContainer,
  TextLinkContent,
  TextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MainTitle,
  TextView,
} from './../components/styles';

const Calculator = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Calculators</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <PageTitle>Available</PageTitle>
          <SubTitle>Try for free!</SubTitle>
        </TextView>

        <StyledButtonCalc onPress={() => navigation.navigate('TwucCalc')}>
          <CalcButtonText>Total weekly urea clearance calculate</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc>
          <CalcButtonText>* calculate</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc>
          <CalcButtonText>** calculate</CalcButtonText>
        </StyledButtonCalc>
        <TextView>
        <TextLink onPress={() => navigation.navigate('Premium')}>
          <TextLinkContent>Want more? Go to Premium calculators!</TextLinkContent>
        </TextLink>
        </TextView>
      </WelcomeContainer2>
    </>
  );
};

export default Calculator;
