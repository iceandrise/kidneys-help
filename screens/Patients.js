
import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import React, { useState } from 'react';
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
  MenuImage,
  TextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';

const Patients = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer>
      <WelcomeContainer2>
        <PageTitle>Patients</PageTitle>
        <TextView>
          <TextLink>+ Add new patient</TextLink>

          <Searchbar 
            placeholder="Search patient"
            onChangeText={onChangeSearch}
            value={searchQuery} />
        </TextView>
      </WelcomeContainer2>
    </>
  );
};

export default Patients;
