import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
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

const TwucCalc = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [singlePool, OnChangeSinglePool] = useState('');
  const [durationHemo, OnChangeDurationHemo] = useState('');
  const [frequencySesions, OnChangeFrequencySessions] = useState('');
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>TwucCalc</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
      <CalcButtonText>Single pool kt/V</CalcButtonText>
      <TextInput style={styles.input} maxLength={10} keyboardType='numeric' onChangeText={OnChangeSinglePool} value={singlePool} />
      <CalcButtonText>Duration of hemodialysis session (min)</CalcButtonText>
      <TextInput style={styles.input} maxLength={10} keyboardType='numeric' onChangeText={OnChangeDurationHemo} value={durationHemo} />
      <CalcButtonText>Frequency of hemodialysis sessions per week (times)</CalcButtonText>
      <TextInput style={styles.input} maxLength={10} keyboardType='numeric' onChangeText={OnChangeFrequencySessions} value={frequencySesions} />

      </WelcomeContainer2>
    </>
  );
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 250,
      margin: 10,
      borderWidth: 1,
    },
    numericInput: {
      height: 40,
      width: 115,
      margin: 10,
      borderWidth: 1,
    },
  });
  

export default TwucCalc;