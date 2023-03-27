import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
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
  Avatar,
  TextView,
} from './../components/styles';

const Calculator = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <PageTitle>Available</PageTitle>
          <SubTitle>Try for free!</SubTitle>
        </TextView>

        <StyledButtonCalc>
          <CalcButtonText>kt/V calculate</CalcButtonText>
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
