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

const Premium = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Premium calculators</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <PageTitle>Premium</PageTitle>
          <SubTitle>Try premium calculators by only 10$!</SubTitle>
        </TextView>

        <StyledButtonPremium onPress={() => navigation.navigate('Payment')}>
          <CalcButtonText>Pay</CalcButtonText>
        </StyledButtonPremium>
        <TextView>
          <TextLink onPress={() => navigation.navigate('Calculator')}>
            <TextLinkContent>Go to Free calculators!</TextLinkContent>
          </TextLink>
        </TextView>
      </WelcomeContainer2>
    </>
  );
};

export default Premium;
