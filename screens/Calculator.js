import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
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
  TextContent,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MainTitle,
  TextView,
} from './../components/styles';
import { useSubscriptionContext } from '../provider/SubscribeProvider';

const Calculator = ({ navigation }) => {
  const { isSubscribed, loading } = useSubscriptionContext();
  const { t } = useTranslation(['common', 'calculators']);
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>{t('common:Calculators')}</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <StyledButtonCalc onPress={() => navigation.navigate('TwucCalc')}>
          <CalcButtonText>{t('common:Total_weekly_urea_clearance_calculate')}</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc onPress={() => navigation.navigate('Daugirdas')}>
          <CalcButtonText>{t('common:Adequacy_of_hemodialysis_Daugirdas')}</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc onPress={() => navigation.navigate('Watson')}>
          <CalcButtonText>{t('common:Total_amount_of_water_for_adults_by_Watson')}</CalcButtonText>
        </StyledButtonCalc>
        <StyledButtonCalc onPress={() => navigation.navigate('MellitsCheek')}>
          <CalcButtonText>{t('common:Total_amount_of_water_for_kids_by_Mellits_Cheek')}</CalcButtonText>
        </StyledButtonCalc>
        <TextContent>
        {t('common:Try_additional_calculator')}
        </TextContent>

        <StyledButtonCalc
          color={!isSubscribed ? '#e0ddd3' : undefined}
          onPress={() => navigation.navigate(isSubscribed ? 'HumeWeyers' : 'Premium')}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <CalcButtonText>{t('common:Total_amount_of_water_for_adults_by_Hume_Weyers')}</CalcButtonText>
          )}
        </StyledButtonCalc>
      </WelcomeContainer2>
    </>
  );
};

export default Calculator;
