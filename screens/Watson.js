import { Formik } from 'formik';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import * as Yup from 'yup';
import { useCalcResultMutation } from '../services/hooks/useCalcResultMutation';
import { useGetPatients } from '../services/hooks/useGetPatients';
import {
  CalcButtonText,
  MainTitle,
  TextView,
  TextView3,
  WelcomeContainer2,
  WelcomeContainer6,
  WelcomeImage,
} from './../components/styles';
import { Box, Button, CheckIcon, Radio, Select } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { WATSON_CALC } from '../constant';

const SignUpSchema = Yup.object().shape({
  age: Yup.number()
    .min(18, 'enter a number greater than or equal to 18')
    .max(99, 'enter a number less than or equal to 99'),
  heightP: Yup.number().max(250, 'enter a number less than or equal to 250'),
  widthP: Yup.number().max(200, 'enter a number less than or equal to 200'),
  patientId: Yup.string().optional(),
  date: Yup.string().optional(),
});

const Watson = ({ navigation }) => {
  const { navigate } = useNavigation();
  const { addCalcResult, loading } = useCalcResultMutation();
  const { patients } = useGetPatients();
  const [sexType, setSexType] = useState('male');
  const [selectedItem, setSelectedItem] = useState(null);

  const items = useMemo(() => {
    const result = patients.map((patient) => ({
      label: `${patient.firstName} ${patient.lastName}`,
      value: patient.id,
    }));
    return result;
  }, [patients]);

  const test = (input) => {
    const { age, heightP, widthP } = input;

    let waterWatson = 1;
    if (sexType === 'male') {
      waterWatson = 2.447 - 0.09516 * age + 0.1074 * heightP + 0.3362 * widthP;
    } else if (sexType === 'female') {
      waterWatson = -2.097 + 0.1069 * heightP + 0.2466 * widthP;
    }

    const result = {
      patientId: selectedItem,
      date: new Date().toLocaleDateString(),
      waterWatson,
    };
    console.log(result);
    return result;
  };

  return (
    <ScrollView removeClippedSubviews showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <Formik
        initialValues={{
          age: '',
          heightP: '',
          widthP: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const result = test(values);
          addCalcResult(result, WATSON_CALC).then(() => navigate(WATSON_CALC));
        }}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
          <>
            <WelcomeContainer6>
              {/* <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} /> */}

              <MainTitle>Water by Watson</MainTitle>
            </WelcomeContainer6>
            <>
              <WelcomeContainer2>
                <Button size="sm" variant="subtle" colorScheme="secondary" onPress={() => navigate(WATSON_CALC)}>
                  <Text>Show Reports</Text>
                </Button>
                <TextView>
                  <CalcButtonText>Choose patient:</CalcButtonText>

                  <Box maxW="300">
                    <Select
                      selectedValue={selectedItem}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Choose Service"
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size="5" />,
                        justifyContent: 'space-between',
                      }}
                      mt={1}
                      onValueChange={(itemValue) => setSelectedItem(itemValue)}
                    >
                      {items.map((item) => (
                        <Select.Item label={item.label} value={item.value} key={item.value} />
                      ))}
                    </Select>
                  </Box>
                </TextView>
                <TextView>
                  <CalcButtonText>Sex</CalcButtonText>
                  <Radio.Group
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={sexType}
                    onChange={(nextValue) => {
                      setSexType(nextValue);
                    }}
                  >
                    <Radio value="male" my={1}>
                      <Text>{'Male'}</Text>
                    </Radio>
                    <Radio value="female" my={1}>
                      <Text>{'Female'}</Text>
                    </Radio>
                  </Radio.Group>
                </TextView>
                <TextView>
                  <CalcButtonText>Age</CalcButtonText>
                  <TextInput
                    style={styles.numericInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={handleChange('age')}
                    value={values.age}
                    onBlur={() => setFieldTouched('age')}
                  />
                  {touched.age && errors.age && <Text style={styles.errorTxt}>{errors.age}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>Height (cm)</CalcButtonText>
                  <TextInput
                    style={styles.numericInput}
                    maxLength={3}
                    keyboardType="number-pad"
                    onChangeText={handleChange('heightP')}
                    value={values.heightP}
                    onBlur={() => setFieldTouched('heightP')}
                  />
                  {touched.heightP && errors.heightP && <Text style={styles.errorTxt}>{errors.heightP}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>Weight (kg)</CalcButtonText>
                  <TextInput
                    style={styles.numericInput}
                    maxLength={3}
                    keyboardType="number-pad"
                    onChangeText={handleChange('widthP')}
                    value={values.widthP}
                    onBlur={() => setFieldTouched('widthP')}
                  />
                  {touched.widthP && errors.widthP && <Text style={styles.errorTxt}>{errors.widthP}</Text>}
                </TextView>

                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
                >
                  <Text style={styles.submitBtnText}>Save Result</Text>
                </TouchableOpacity>
              </WelcomeContainer2>
            </>
          </>
        )}
      </Formik>
    </ScrollView>
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
});

export default Watson;
