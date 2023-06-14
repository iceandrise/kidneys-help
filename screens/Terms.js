import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  PageTitle,
  TextContent,
  TextLink2,
  WelcomeContainer6,
  WelcomeContainer2,
  WelcomeImage,
  MainTitle,
} from './../components/styles';

const Terms = ({ navigation }) => {
  const { t } = useTranslation(['common', 'calculators']);
  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <SafeAreaView style={{ flex: 1, paddingLeft: 24 }}>
      <WelcomeContainer6>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>{t('calculators:Terms&Conditions')}</MainTitle>
      </WelcomeContainer6>
      <>
      <WelcomeContainer2>
        <PageTitle>{t('common:T1')}</PageTitle>
        <TextLink2>
          <TextContent>
          {t('common:T1')}
          </TextContent>
          <TextContent>
          {t('common:T2')}
          </TextContent>
          <TextContent>
          {t('common:T3')}
            
          </TextContent>
          <TextContent>
          {t('common:T4')}
           
          </TextContent>
          <TextContent>
          {t('common:T5')}
            
          </TextContent>
          <TextContent>
          {t('common:T6')}
            
          </TextContent>
        </TextLink2>
      </WelcomeContainer2>
      </>
      </SafeAreaView>
    </ScrollView>
   
  );
};

export default Terms;
