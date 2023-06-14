import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  PageTitle,
  TextContent,
  TextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MainTitle,
} from './../components/styles';

const Privacy = ({ navigation }) => {
  const { t } = useTranslation(['common', 'calculators']);
  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>{t('common:Privacy')}</MainTitle>
      </WelcomeContainer>

      <WelcomeContainer2>
        <PageTitle>{t('calculators:Privacy_Policy')}</PageTitle>
        <TextLink>
          <TextContent>
          {t('common:P1')}
           
          </TextContent>
        </TextLink>
      </WelcomeContainer2>
    </ScrollView>
  );
};

export default Privacy;
