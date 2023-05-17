import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
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
import { useSubscriptionContext } from '../provider/SubscribeProvider';

const Calculator = ({ navigation }) => {
  const { isSubscribed, loading } = useSubscriptionContext();
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Calculators</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <StyledButtonCalc onPress={() => navigation.navigate('TwucCalc')}>
          <CalcButtonText>Total weekly urea clearance calculate</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc onPress={() => navigation.navigate('Daugirdas')}>
          <CalcButtonText>Adequacy of hemodialysis Daugirdas</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc onPress={() => navigation.navigate('Watson')}>
          <CalcButtonText>Total amount of water for adults by Watson</CalcButtonText>
        </StyledButtonCalc>

        <StyledButtonCalc
          color={!isSubscribed ? '#e0ddd3' : undefined}
          onPress={() => navigation.navigate(isSubscribed ? 'HumeWeyers' : 'Premium')}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <CalcButtonText>Total amount of water for adults by Hume-Weyers</CalcButtonText>
          )}
        </StyledButtonCalc>
        <StyledButtonCalc onPress={() => navigation.navigate('MellitsCheek')}>
          <CalcButtonText>Total amount of water for kids by Mellits-Cheek</CalcButtonText>
        </StyledButtonCalc>
      </WelcomeContainer2>
    </>
  );
};

export default Calculator;
