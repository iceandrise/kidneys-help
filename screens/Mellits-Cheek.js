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

const SignUpSchema = Yup.object().shape({
  heightP: Yup.number().max(250, 'enter a number less than or equal to 250'),
  widthP: Yup.number().max(200, 'enter a number less than or equal to 200'),
  patientId: Yup.string().optional(),
  date: Yup.string().optional(),
});

const MellitsCheek = ({ navigation }) => {
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
    const { heightP, widthP } = input;

    let waterMC = 1;
    if (sexType === 'male' && heightP <= 132.7) {
      waterMC = -1.927 + 0.465 * widthP + 0.045 * heightP;
    } else if (sexType === 'male' && heightP > 132.7) {
      waterMC = -21.993 + 0.406 * widthP + 0.209 * heightP;
    } else if (sexType === 'female' && heightP <= 110.8) {
      waterMC = 0.076 + 0.507 * widthP + 0.013 * heightP;
    } else if (sexType === 'female' && heightP > 110.8) {
      waterMC = -10.313 + 0.252 * widthP + 0.154 * heightP;
    }

    const result = {
      patientId: selectedItem,
      date: new Date().toLocaleDateString(),
      waterMC,
    };
    console.log(result);
    return result;
  };

  return (
    <ScrollView removeClippedSubviews showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <Formik
        initialValues={{
          heightP: '',
          widthP: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const result = test(values);
          addCalcResult(result).then(() => navigate('Results'));
        }}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
          <>
            <WelcomeContainer6>
              {/* <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} /> */}

              <MainTitle>Water by Mellits-Cheek</MainTitle>
            </WelcomeContainer6>
            <>
              <WelcomeContainer2>
                <Button size="sm" variant="subtle" colorScheme="secondary" onPress={() => navigate('Results')}>
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

export default MellitsCheek;
