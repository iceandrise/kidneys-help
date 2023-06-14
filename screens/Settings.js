import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';
import {
  FormAct,
  ItemsViewDop,
  IViewDop,
  MainTitle,
  SetButtonText,
  SubTitle,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
} from './../components/styles';

const Settings = ({ navigation }) => {
  const theme = useContext(themeContext);
  const { i18n } = useTranslation();
  const { t } = useTranslation(['common', 'calculators']);

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [checkLang, setCheckLang] = useState(language === 'ru');
  return (
    <>
      <WelcomeContainer style={[{ backgroundColor: theme.backgroundColor }]}>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle style={[{ color: theme.color }]}>{t('calculators:Settings')}</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2 style={[{ backgroundColor: theme.backgroundColor }]}>
        <FormAct>
          
          <SubTitle>{t('calculators:Theme')}</SubTitle>
         
         
          <IViewDop>
            <SetButtonText>{t('calculators:Light')}</SetButtonText>
            <Switch
              value={darkMode}
              onValueChange={(value) => {
                setDarkMode(value);
                EventRegister.emit('ChangeTheme', value);
              }}
            />
            <SetButtonText>{t('calculators:Dark')}</SetButtonText>
          </IViewDop>
        </FormAct>

        <FormAct>
        <SubTitle>{t('calculators:Language')}</SubTitle>
          <IViewDop>
            <SetButtonText>{!checkLang ? 'English' : 'Русский'}</SetButtonText>
            <Switch
              value={checkLang}
              onValueChange={(value) => {
                setCheckLang(value);
                i18n.changeLanguage(language === 'ru' ? 'en' : 'ru');
              }}
            />
          </IViewDop>
        </FormAct>
      </WelcomeContainer2>
    </>
  );
};

export default Settings;
