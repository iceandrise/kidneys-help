import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import {
  InnerContainer,
  PageTitle,
  MainTitle,
  StyledFormArea,
  TextContent,
  TextLinkContent,
  ActButtonText,
  TextLink,
  StyledPatient,
  StyledButtonAct,
  SubTitle,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';

const InfoPatient = ({ navigation }) => {
  //   const [searchQuery, setSearchQuery] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [name, OnChangeName] = useState('Name of patient');
  const [surname, OnChangeSurname] = useState('Surname of patient');
  const [room, OnChangeRoom] = useState('Room');
  const [age, OnChangeAge] = useState('Age');

  //   const [heightP, OnChangeHeight] = useState('Height');
  //   const [widthP, OnChangeWidth] = useState('Width');
  //   const [preasure, OnChangePreasure] = useState('Preasure');
  //   const [sexP, OnChangeSex] = useState('Sex');

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Patient's info</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextInput style={styles.input} onChangeText={OnChangeSurname} value={surname} />
        <TextInput style={styles.input} onChangeText={OnChangeName} value={name} />
        <TextInput style={styles.numericInput} onChangeText={OnChangeRoom} value={room} />

        <TextInput style={styles.numericInput} editable={false} value="Duration" />
        <TextInput style={styles.numericInput} editable={false} value="Sex" />
        <TextInput style={styles.numericInput} editable={false} value="Water" />
        <TextInput style={styles.numericInput} editable={false} value="Res1" />
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

export default InfoPatient;
