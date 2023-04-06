import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  InnerContainer,
  PageTitle,
  MainTitle,
  StyledFormArea,
  TextContent,
  TextLinkContent,
  ActButtonText,
  MenuButtonText,
  ResCalc,
  StyledButtonAct,
  CalcButtonText,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  TextView,
  TextView5,
  TextView4,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';

const Diary = ({ navigation }) => {
  //   const [searchQuery, setSearchQuery] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [name, OnChangeName] = useState('Name of patient');
  const [surname, OnChangeSurname] = useState('Surname of patient');
  const [room, OnChangeRoom] = useState('Room');
  const [age, OnChangeAge] = useState('');
  const [checked, setChecked] = useState('Preasure');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Monday', value: 'mon' },
    { label: 'Tuesday', value: 'tue' },
    { label: 'Wednesday', value: 'wed' },
    { label: 'Thursday', value: 'thu' },
    { label: 'Friday', value: 'fri' },
    { label: 'Saturday', value: 'sat' },
    { label: 'Sunday', value: 'sun' },
  ]);

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Patient's Diary</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView5>
          <TextView4>
            <RadioButton
              value="Preasure"
              status={checked === 'Preasure' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Preasure')}
            />
            <CalcButtonText>Preasure</CalcButtonText>
          </TextView4>
          <TextView4>
            <RadioButton
              value="Weight"
              status={checked === 'Weight' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Weight')}
            />
            <CalcButtonText>Weight</CalcButtonText>
          </TextView4>
          <TextView4>
            <RadioButton
              value="Liquid consumed"
              status={checked === 'Liquid consumed' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Liquid consumed')}
            />
            <CalcButtonText>Liquid consumed</CalcButtonText>
          </TextView4>
          <StyledButtonAct>
              <ActButtonText>Add</ActButtonText>
            </StyledButtonAct>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <TextView>
            <TextInput
              style={styles.numericInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={OnChangeAge}
              value={age}
            />
          </TextView>
          <ResCalc onPress={() => navigation.navigate('Chart')}>
            <MenuButtonText>Make chart</MenuButtonText>
          </ResCalc>
        </TextView5>
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

export default Diary;
