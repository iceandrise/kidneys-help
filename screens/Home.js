import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import themeContext from '../theme/themeContext';
import {
  ItemsView,
  MenuButtonText,
  StyledButtonMain,
  TextLink2,
  TextLinkContent2,
  WelcomeContainer2,
  WelcomeContainer6,
  WelcomeImage,
} from './../components/styles';

const Home = () => {
  const theme = useContext(themeContext);
  const { t } = useTranslation(['common', 'calculators']);
  const navigation = useNavigation();
  // t('fileName:имяОбъекта')
  // t('calculators:twuCalc')
  return (
    <SafeAreaView style={{ flex: 1, paddingLeft: 24 }}>
      <WelcomeContainer6 style={[{ backgroundColor: theme.backgroundColor }]}>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer6>
      <>
        <WelcomeContainer2 style={[{ backgroundColor: theme.backgroundColor }]}>
          <ItemsView>
            <StyledButtonMain onPress={() => navigation.navigate('Calculator')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/calculator.png')} />
              <MenuButtonText>{t('common:Calculators')}</MenuButtonText>
            </StyledButtonMain>
            <StyledButtonMain onPress={() => navigation.navigate('Patients')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/patient.png')} />
              <MenuButtonText>{t('calculators:Patients')}</MenuButtonText>
            </StyledButtonMain>
          </ItemsView>
          <ItemsView>
            <StyledButtonMain onPress={() => navigation.navigate('Diary')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/book.png')} />
              <MenuButtonText>{t('calculators:Patient')}</MenuButtonText>
              <MenuButtonText>{t('calculators:diary')}</MenuButtonText>
            </StyledButtonMain>
            <StyledButtonMain onPress={() => navigation.navigate('ContactUs')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/contact.png')} />
              <MenuButtonText>{t('calculators:Contact')}</MenuButtonText>
              <MenuButtonText>{t('calculators:us')}</MenuButtonText>
            </StyledButtonMain>
          </ItemsView>
          <ItemsView>
          <StyledButtonMain onPress={() => navigation.navigate('Options')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/add.png')} />
              <MenuButtonText>{t('calculators:Optional')}</MenuButtonText>
            </StyledButtonMain>
            <StyledButtonMain onPress={() => navigation.navigate('Help')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/info.png')} />
              <MenuButtonText>{t('calculators:Help')}</MenuButtonText>
              <MenuButtonText>{t('calculators:with')}</MenuButtonText>
              <MenuButtonText>{t('calculators:app')}</MenuButtonText>
            </StyledButtonMain>
          </ItemsView>
        </WelcomeContainer2>
      </>
    </SafeAreaView>
  );
};

export default Home;
