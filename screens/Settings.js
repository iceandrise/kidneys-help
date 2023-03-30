import { StatusBar } from 'expo-status-bar';
import { View, Button, Switch } from 'react-native';
import React, { useState, useContext } from 'react';
import {
  InnerContainer,
  PageTitle,
  MainTitle,
  FormAct,
  TextContent,
  SetButtonText,
  ActButtonText,
  SubTitle,
  StyledPatient,
  ItemsViewDop,
  SecTextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';
import theme from '../theme/theme';
import { ThemeContext } from 'styled-components';

const Settings = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <WelcomeContainer style={[{ backgroundColor: theme.backgroundColor }]}>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle style={[{ color: theme.color }]}>Settings</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2 style={[{ backgroundColor: theme.backgroundColor }]}>
        <FormAct>
        <SubTitle>Theme switch</SubTitle>
        <ItemsViewDop>
          <SetButtonText>Light mode</SetButtonText>
          <Switch
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit('ChangeTheme', value);
            }}
          />
          <SetButtonText>Dark mode</SetButtonText>
        </ItemsViewDop>
        </FormAct>

        <FormAct>
        <SubTitle>Language switch</SubTitle>
        <ItemsViewDop>
          <SetButtonText>English</SetButtonText>
          <Switch
            value={darkMode}
            onValueChange={(value) => {
              setDarkMode(value);
              EventRegister.emit('ChangeTheme', value);
            }}
          />
          <SetButtonText>Russian</SetButtonText>
        </ItemsViewDop>
        </FormAct>
      </WelcomeContainer2>
    </>
  );
};

export default Settings;
