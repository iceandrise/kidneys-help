import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import {
  CalcButtonText,
  MainTitle,
  TextView,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
} from '../components/styles';
import { usePatientMutation } from '../services/hooks/usePatientMutation';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(10).required('Enter correct firstName'),
  lastName: Yup.string().min(2).max(10).required('Enter correct lastName'),
  room: Yup.string().min(2).max(8).required('Enter correct room'),
});

const AddPatient = ({ navigation }) => {
  const { addPatient, loading } = usePatientMutation();
  const { navigate } = useNavigation();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        room: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => addPatient(values).then(() => navigate('Patients'))}
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
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                onBlur={() => setFieldTouched('lastName')}
              />
              {touched.lastName && errors.lastName && <Text style={styles.errorTxt}>{errors.lastName}</Text>}
            </TextView>

            <TextView>
              <CalcButtonText>Enter name</CalcButtonText>
              <TextInput
                style={styles.input}
                maxLength={10}
                keyboardType="default"
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                onBlur={() => setFieldTouched('firstName')}
              />
              {touched.firstName && errors.firstName && <Text style={styles.errorTxt}>{errors.firstName}</Text>}
            </TextView>

            <TextView>
              <CalcButtonText>Enter room</CalcButtonText>
              <TextInput
                style={styles.input}
                maxLength={8}
                keyboardType="default"
                onChangeText={handleChange('room')}
                value={values.room}
                onBlur={() => setFieldTouched('room')}
              />
              {touched.room && errors.room && <Text style={styles.errorTxt}>{errors.room}</Text>}
            </TextView>

            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
            >
              {!loading ? <Text style={styles.submitBtnText}>Add patient</Text> : <ActivityIndicator />}
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

export default AddPatient;
