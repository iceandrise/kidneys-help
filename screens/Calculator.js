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
  MenuImage,
  ActIcon,
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
        <StyledButtonCalc>
          <CalcButtonText>*** calculate</CalcButtonText>
        </StyledButtonCalc>
        <TextView>
          <PageTitle>Premium</PageTitle>
          <SubTitle>Try premium calculators by only 10$!</SubTitle>
        </TextView>
        <StyledButtonPremium>
          <CalcButtonText>! calculate</CalcButtonText>
        </StyledButtonPremium>
        <StyledButtonPremium>
          <CalcButtonText>!!! calculate</CalcButtonText>
        </StyledButtonPremium>
      </WelcomeContainer2>
    </>
  );
};

export default Calculator;
