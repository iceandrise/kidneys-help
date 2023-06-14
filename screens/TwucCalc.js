import { Formik } from 'formik';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
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
import { TWUC_CALC } from '../constant';

const SignUpSchema = Yup.object().shape({
  singlePool: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  durationHemo: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  frequencySessions: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  dailyVolume: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  fluidIntake: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  urineUrea: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  ureaBlood: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  age: Yup.number()
    .min(18, 'enter a number greater than or equal to 18')
    .max(99, 'enter a number less than or equal to 99'),
  heightP: Yup.number().max(250, 'enter a number less than or equal to 250'),
  widthP: Yup.number().max(200, 'enter a number less than or equal to 200'),
  patientId: Yup.string().optional(),
  date: Yup.string().optional(),
});

const TwucCalc = () => {
  const { navigate } = useNavigation();
  const { addCalcResult, loading } = useCalcResultMutation();
  const { patients } = useGetPatients();
  const [selectedItem, setSelectedItem] = useState(null);
  const [sexType, setSexType] = useState('male');
  const [period, setPeriod] = useState('short');
  const { t } = useTranslation(['common', 'calculators']);

  const items = useMemo(() => {
    const result = patients.map((patient) => ({
      label: `${patient.firstName} ${patient.lastName}`,
      value: patient.id,
    }));
    return result;
  }, [patients]);

  const test = (input) => {
    const {
      widthP,
      heightP,
      age,
      ureaBlood,
      urineUrea,
      fluidIntake,
      dailyVolume,
      frequencySessions,
      durationHemo,
      singlePool,
    } = input;

    let eqClearance = singlePool *(( 0.47 * singlePool) / durationHemo) + 0.02;
    let N = -1*eqClearance;
    let perem = Math.pow(2.71, N);

    let stClearance =
      (10080 - perem) / ( ((1 - perem) / eqClearance) + (10080 / (frequencySessions * durationHemo)) - 1);
    let distributionUrea = 1;

    if (sexType === 'male') {
      distributionUrea = 2.447 - 0.09516 * age + 0.1074 * heightP + 0.3362 * widthP;
    } else if (sexType === 'female') {
      distributionUrea = -2.097 + 0.1069 * heightP + 0.2466 * widthP;
    }
    let cPlasmaUrea = 1;
    let wUrineVolume = 1;
  
    

    if (period === 'short') {
      wUrineVolume = dailyVolume * 6.86;
      cPlasmaUrea = ureaBlood * 0.92;
    } else if (period === 'long') {
      wUrineVolume = dailyVolume * 5.11;
      cPlasmaUrea = ureaBlood * 0.98;
    }

    let nativeClearance = ((1000 * dailyVolume * (urineUrea / 0.1665)) / (2.8 * cPlasmaUrea)) / 1440;
    let cNativeClearance = 1;

    if (period === 'short') {
      cNativeClearance = nativeClearance * 0.99;
    } else if (period === 'long') {
      cNativeClearance = nativeClearance * 0.81;
    }

    let removeFluid = fluidIntake - wUrineVolume;
    let stDiaClearance = stClearance/( 1 - (0.74 / frequencySessions) * (removeFluid / distributionUrea) );
    let stWeeklyClearance = cNativeClearance * (10080 / distributionUrea);
    let twucClearance = stWeeklyClearance + stDiaClearance;

    const result = {
      patientId: selectedItem,
      date: new Date().toLocaleDateString(),
      eqClearance,
      stClearance,
      stDiaClearance,
      nativeClearance,
      cNativeClearance,
      stWeeklyClearance,
      twucClearance,
      wUrineVolume,
      removeFluid,
      distributionUrea,
      cPlasmaUrea,
    };
    console.log(result);
    return result;
  };

  return (
    <ScrollView removeClippedSubviews showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <Formik
        initialValues={{
          singlePool: '',
          durationHemo: '',
          frequencySessions: '',
          dailyVolume: '',
          fluidIntake: '',
          urineUrea: '',
          ureaBlood: '',
          age: '',
          heightP: '',
          widthP: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const result = test(values);
          addCalcResult(result, TWUC_CALC).then(() => navigate(TWUC_CALC));
        }}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
          <>
            <WelcomeContainer6>
              {/* <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} /> */}

              <MainTitle>{t('common:TwucCalc')}</MainTitle>
            </WelcomeContainer6>
            <>
              <WelcomeContainer2>
                <Button size="sm" variant="subtle" colorScheme="secondary" onPress={() => navigate(TWUC_CALC)}>
                  <Text>{t('common:Show_reports')}</Text>
                </Button>
                <TextView>
                  <CalcButtonText>{t('common:Choose_patient')}</CalcButtonText>

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
                  <CalcButtonText>{t('common:Single_pool_ktV')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('singlePool')}
                    value={values.singlePool}
                    onBlur={() => setFieldTouched('singlePool')}
                  />
                  {touched.singlePool && errors.singlePool && <Text style={styles.errorTxt}>{errors.singlePool}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Duration_of_hemodialysis_session')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('durationHemo')}
                    value={values.durationHemo}
                    onBlur={() => setFieldTouched('durationHemo')}
                  />
                  {touched.durationHemo && errors.durationHemo && (
                    <Text style={styles.errorTxt}>{errors.durationHemo}</Text>
                  )}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Frequency_of_hemodialysis_sessions_per_week')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('frequencySessions')}
                    value={values.frequencySessions}
                    onBlur={() => setFieldTouched('frequencySessions')}
                  />
                  {touched.frequencySessions && errors.frequencySessions && (
                    <Text style={styles.errorTxt}>{errors.frequencySessions}</Text>
                  )}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Daily_urine_volume')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('dailyVolume')}
                    value={values.dailyVolume}
                    onBlur={() => setFieldTouched('dailyVolume')}
                  />
                  {touched.dailyVolume && errors.dailyVolume && (
                    <Text style={styles.errorTxt}>{errors.dailyVolume}</Text>
                  )}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Weekly_fluid_intake')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('fluidIntake')}
                    value={values.fluidIntake}
                    onBlur={() => setFieldTouched('fluidIntake')}
                  />
                  {touched.fluidIntake && errors.fluidIntake && (
                    <Text style={styles.errorTxt}>{errors.fluidIntake}</Text>
                  )}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Urine_urea_consentration')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('urineUrea')}
                    value={values.urineUrea}
                    onBlur={() => setFieldTouched('urineUrea')}
                  />
                  {touched.urineUrea && errors.urineUrea && <Text style={styles.errorTxt}>{errors.urineUrea}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Urea_content_in_blood_plasmabefore_hemodialysis')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('ureaBlood')}
                    value={values.ureaBlood}
                    onBlur={() => setFieldTouched('ureaBlood')}
                  />
                  {touched.ureaBlood && errors.ureaBlood && <Text style={styles.errorTxt}>{errors.ureaBlood}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Metdyalisis_period')}</CalcButtonText>
                  <TextView3>
                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={period}
                      onChange={(nextValue) => {
                        setPeriod(nextValue);
                      }}
                    >
                      <Radio value="short" my={1}>
                        <Text>{t('common:Short')}</Text>
                      </Radio>
                      <Radio value="long" my={1}>
                        <Text>{t('common:Long')}</Text>
                      </Radio>
                    </Radio.Group>
                  </TextView3>
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Age')}</CalcButtonText>
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
                  <CalcButtonText>{t('common:Height')}</CalcButtonText>
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
                  <CalcButtonText>{t('common:Weight')}</CalcButtonText>
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
                <TextView>
                  <CalcButtonText>{t('common:Sex')}</CalcButtonText>
                  <Radio.Group
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={sexType}
                    onChange={(nextValue) => {
                      setSexType(nextValue);
                    }}
                  >
                    <Radio value="male" my={1}>
                      <Text>{t('common:Male')}</Text>
                    </Radio>
                    <Radio value="female" my={1}>
                      <Text>{t('common:Female')}</Text>
                    </Radio>
                  </Radio.Group>
                </TextView>

                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
                >
                  <Text style={styles.submitBtnText}>{t('common:Save_Result')}</Text>
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

export default TwucCalc;
