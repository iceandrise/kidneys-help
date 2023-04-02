import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  InnerContainer,
  PageTitle,
  MainTitle,
  StyledFormArea,
  TextContent,
  CalcButtonText,
  ActButtonText,
  TextView2,
  StyledPatient,
  StyledButtonAct,
  SecTextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';

const Payment = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Payment</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>

      </WelcomeContainer2>
    </>
  );
};

export default Payment;