import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import {
    PageTitle,
    TextContent,
    TextLink,
    WelcomeContainer,
    WelcomeContainer2,
    WelcomeImage,
    Main2Image,
    MainTitle,
    Main1Image,
    Main3Image,
    Main4Image
} from './../components/styles';

const Help = () => {
  const { t } = useTranslation(['common', 'calculators']);
    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
          <StatusBar style="light" />
          <WelcomeContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
            <MainTitle>{t('common:User_guide')}</MainTitle>
          </WelcomeContainer>
    
          <WelcomeContainer2>
            <PageTitle>{t('common:Help_with_app')}</PageTitle>
            <TextLink>
              <TextContent>
              {t('common:first')}
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/calc.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              {t('common:second')}
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/patient.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              {t('common:third')}     
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/diary.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              {t('common:fourth')}
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/contact.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              {t('common:fifth')}
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/optional.jpeg')} />
              <TextContent>
              {t('common:sixth')}
              </TextContent>
              <Main1Image resizeMode="cover" source={require('./../assets/image/settings.jpeg')} />
              <TextContent>
              {t('common:seventh')}
              </TextContent>
              <Main3Image resizeMode="cover" source={require('./../assets/image/terms.jpeg')} />
              <Main4Image resizeMode="cover" source={require('./../assets/image/privacy.jpeg')} />
              <TextContent>
              {t('common:eighth')}
              </TextContent>
              <Main1Image resizeMode="cover" source={require('./../assets/image/logout.jpeg')} />
            </TextLink>
          </WelcomeContainer2>
        </ScrollView>
      );
    };

export default Help;
