import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
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

const SignUpSchema = Yup.object().shape({
  inputParameter: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (inputParameter) => String(inputParameter).length <= 8,
  ),
});

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
    <Formik
      initialValues={{
        inputParameter: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
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
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={handleChange('inputParameter')}
                  value={values.inputParameter}
                  onBlur={() => setFieldTouched('inputParameter')}
                />
                {touched.inputParameter && errors.inputParameter && (
                  <Text style={styles.errorTxt}>{errors.inputParameter}</Text>
                )}
              </TextView>

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
              >
                <Text style={styles.submitBtnText}>Make chart</Text>
              </TouchableOpacity>
            </TextView5>
          </WelcomeContainer2>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  errorTxt: {
    fontSize: 12,
    color: '#FF0D10',
  },
  submitBtn: {
    padding: 10,
    justifyContent: 'center',
  },
  submitBtnText: {
    color: '#FFE4E1',
    textAlign: 'center',
    fontSize: 18,
  },
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
