import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import * as Yup from 'yup';
import {
  ActButtonText,
  CalcButtonText,
  MainTitle,
  StyledButtonAct,
  TextView,
  TextView4,
  TextView5,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
} from './../components/styles';
import { useDiaryMutation } from '../services/hooks/useDiaryMutation';
import { useDiaryQuery } from '../services/hooks/useDiaryQuery';

const SignUpSchema = Yup.object().shape({
  inputParameter: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (inputParameter) => String(inputParameter).length <= 8,
  ),
});

const Diary = ({ navigation }) => {
  const [selectedDiary, setSelectedDiary] = useState('Preasure');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([
    { label: 'Monday', value: 1 },
    { label: 'Tuesday', value: 2 },
    { label: 'Wednesday', value: 3 },
    { label: 'Thursday', value: 4 },
    { label: 'Friday', value: 5 },
    { label: 'Saturday', value: 6 },
    { label: 'Sunday', value: 7 },
  ]);
  const { refetch } = useDiaryQuery('Weight');

  const { addDiary, loading } = useDiaryMutation();

  const { navigate } = useNavigation();

  return (
    <Formik
      initialValues={{
        inputParameter: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        addDiary({ ...values, day: value }, selectedDiary).then(() => {
          refetch();
        });
      }}
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
                  status={selectedDiary === 'Preasure' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedDiary('Preasure')}
                />
                <CalcButtonText>Preasure</CalcButtonText>
              </TextView4>
              <TextView4>
                <RadioButton
                  value="Weight"
                  status={selectedDiary === 'Weight' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedDiary('Weight')}
                />
                <CalcButtonText>Weight</CalcButtonText>
              </TextView4>
              <TextView4>
                <RadioButton
                  value="Liquid consumed"
                  status={selectedDiary === 'Liquid' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedDiary('Liquid')}
                />
                <CalcButtonText>Liquid consumed</CalcButtonText>
              </TextView4>
              <StyledButtonAct>
                <ActButtonText>Add</ActButtonText>
              </StyledButtonAct>
              <DropDownPicker
                open={open}
                defaultValue={value}
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
              <TouchableOpacity
                onPress={() => navigate(`${selectedDiary}Chart`)}
                disabled={!isValid}
                style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
              >
                <Text style={styles.submitBtnText}>Show Chart</Text>
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
