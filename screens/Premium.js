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
        {/* open after pay */}
        {/* <StyledButtonPremium onPress={() => navigation.navigate('Payment')}> */} 
        <StyledButtonPremium onPress={() => navigation.navigate('HumeWeyers')}>
          <CalcButtonText>Total amount of water for adults by Hume-Weyers</CalcButtonText>
        </StyledButtonPremium>
        <StyledButtonPremium onPress={() => navigation.navigate('Payment')}>
          <CalcButtonText>!!! calculate</CalcButtonText>
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
