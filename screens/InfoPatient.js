import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
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
  CalcButtonText,
  StyledButtonAct,
  SubTitle,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  Surname: Yup.string().min(2).max(10).required('Enter correct surname'),
  Name: Yup.string().min(2).max(10).required('Enter correct name'),
  Room: Yup.string().min(2).max(8).required('Enter correct room'),
});

const InfoPatient = ({ navigation }) => {
  const [isDisabled, setDisabled] = useState(true);
  const [name, OnChangeName] = useState('Name of patient');
  const [surname, OnChangeSurname] = useState('Surname of patient');
  const [room, OnChangeRoom] = useState('Room');
  const [age, OnChangeAge] = useState('Age');

  return (
    <Formik
      initialValues={{
        Surname: '',
        Name: '',
        Room: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
        <>
          <StatusBar style="light" />
          <WelcomeContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
            <MainTitle>Patient's info</MainTitle>
          </WelcomeContainer>
          <WelcomeContainer2>
            <TextView>
            <CalcButtonText>Enter surname</CalcButtonText>
              <TextInput
                style={styles.input}
                maxLength={10}
                keyboardType="default"
                onChangeText={handleChange('Surname')}
                value={values.Surname}
                onBlur={() => setFieldTouched('Surname')}
              />
              {touched.Surname && errors.Surname && (
                <Text style={styles.errorTxt}>{errors.Surname}</Text>
              )}
            </TextView>

            <TextView>
            <CalcButtonText>Enter name</CalcButtonText>
              <TextInput
                style={styles.input}
                maxLength={10}
                keyboardType="default"
                onChangeText={handleChange('Name')}
                value={values.Name}
                onBlur={() => setFieldTouched('Name')}
              />
              {touched.Name && errors.Name && (
                <Text style={styles.errorTxt}>{errors.Name}</Text>
              )}
            </TextView>

            <TextView>
            <CalcButtonText>Enter room</CalcButtonText>
              <TextInput
                style={styles.input}
                maxLength={8}
                keyboardType="default"
                onChangeText={handleChange('Room')}
                value={values.Room}
                onBlur={() => setFieldTouched('Room')}
              />
              {touched.Room && errors.Room && (
                <Text style={styles.errorTxt}>{errors.Room}</Text>
              )}
            </TextView>

            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
            >
              <Text style={styles.submitBtnText}>Add patient</Text>
            </TouchableOpacity>
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

export default InfoPatient;
