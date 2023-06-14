import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation(['common', 'calculators']);
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>{t('common:Premium')}</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <PageTitle>{t('common:Only_2$')}</PageTitle>
        </TextView>

        <StyledButtonPremium onPress={() => navigation.navigate('Payment')}>
          <CalcButtonText>{t('common:Pay')}</CalcButtonText>
        </StyledButtonPremium>
        <TextView>
          <TextLink onPress={() => navigation.navigate('Calculator')}>
            <TextLinkContent>{t('common:Go_to_free_calculators')}</TextLinkContent>
          </TextLink>
        </TextView>
      </WelcomeContainer2>
    </>
  );
};

export default Premium;
