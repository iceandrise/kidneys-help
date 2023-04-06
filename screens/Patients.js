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

const Patients = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>My patients</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <Searchbar placeholder="Search patient" onChangeText={onChangeSearch} value={searchQuery} />
        </TextView>

        <StyledPatient onPress={() => navigation.navigate('InfoPatient')}>
          <ItemsView>
            <TextView2>
              <CalcButtonText>Name Patient</CalcButtonText>
              <CalcButtonText>221</CalcButtonText>
            </TextView2>
            <TextView2>
              <StyledButtonAct>
                <ActButtonText>Delete</ActButtonText>
              </StyledButtonAct>
            </TextView2>
          </ItemsView>
        </StyledPatient>
      </WelcomeContainer2>
    </>
  );
};

export default Patients;
