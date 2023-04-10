import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import {
  SubTitle,
  TextView3,
  MainTitle,
  ResCalc,
  MenuButtonText,
  CalcButtonText,
  TextView2,
  ActButtonText,
  StyledButtonAct,
  TextView,
  WelcomeContainer6,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';

const SignUpSchema = Yup.object().shape({
  singlePool: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (singlePool) => String(singlePool).length <= 8,
  ),
  durationHemo: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (durationHemo) => String(durationHemo).length <= 8,
  ),
  frequencySessions: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (frequencySessions) => String(frequencySessions).length <= 8,
  ),
  dailyVolume: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (dailyVolume) => String(dailyVolume).length <= 8,
  ),
  fluidIntake: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (fluidIntake) => String(fluidIntake).length <= 8,
  ),
  urineUrea: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (urineUrea) => String(urineUrea).length <= 8,
  ),
  ureaBlood: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (ureaBlood) => String(ureaBlood).length <= 8,
  ),
  age: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (age) => String(age).length === 2,
  ),
  heightP: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (heightP) => String(heightP).length <= 5,
  ),
  widthP: Yup.number().test(
    'maxDigits',
    'enter a correct number',
    (widthP) => String(widthP).length <= 5,
  ),
});

const TwucCalc = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  //   const onChangeSearch = (query) => setSearchQuery(query);
    const [singlePool, OnChangeSinglePool] = useState('');
    const [durationHemo, OnChangeDurationHemo] = useState('');
    const [frequencySessions, OnChangeFrequencySessions] = useState('');
    const [dailyVolume, OnChangeDailyVolume] = useState('');
    const [fluidIntake, OnChangeFluidIntake] = useState('');
    const [urineUrea, OnChangeUrineUrea] = useState('');
    const [ureaBlood, OnChangeUreaBlood] = useState('');
    const [age, OnChangeAge] = useState('');
    const [heightP, OnChangeHeight] = useState('');
    const [widthP, OnChangeWidth] = useState('');
    const [sexType, OnChangeSextype] = useState(0);
    const [period, OnChangePeriod] = useState(0);
  const [checked, setChecked] = useState('short');
  const [checked1, setChecked1] = useState('male');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Patient1', value: 'p1' },
    { label: 'Patient2', value: 'p2' },
  ]);

  let eqClearance = singlePool * (durationHemo / (durationHemo + 30.7));
  let perem = Math.pow(Math.exp, -1 * eqClearance);
  let stClearance =
    (10080 * (1 - perem)) / ((1 - perem) / eqClearance + (10080 / (frequencySessions * durationHemo) - 1));
  let distributionUrea;

  if (sexType === 1) {
    distributionUrea = 2.447 - 0.09516 * age + 0.1074 * heightP + 0.3362 * widthP;
  } else if (sexType === 2) {
    distributionUrea = -2.097 + 0.1069 * heightP + 0.2466 * widthP;
  }
  let cPlasmaUrea;
  let wUrineVolume;
  let cNativeClearance;

  if (period === 2) {
    cNativeClearance = nativeClearance * 0.99;
    wUrineVolume = dailyVolume * 0.98 * 7;
    cPlasmaUrea = ureaBlood * 0.92;
  } else if (period === 3) {
    cNativeClearance = nativeClearance * 0.81;
    wUrineVolume = dailyVolume * 0.73 * 7;
    cPlasmaUrea = ureaBlood * 0.98;
  }

  let nativeClearance = (1000 * dailyVolume * (urineUrea / 0.1665)) / (2.8 * cPlasmaUrea) / 1440;

  let removeFluid = fluidIntake - wUrineVolume;
  let stDiaClearance = stClearance / ((1 - 0.74 / frequencySessions) * (removeFluid / distributionUrea));
  let stWeeklyClearance = cNativeClearance * (10080 / distributionUrea);
  let twucClearance = stWeeklyClearance + stDiaClearance;

  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
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
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
        <SafeAreaView style={{ flex:1, paddingLeft: 24 }}>
          <WelcomeContainer6>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
            <MainTitle>TwucCalc</MainTitle>
          </WelcomeContainer6>
          <>
            <WelcomeContainer2>
              <TextView>
                <CalcButtonText>Choose patient:</CalcButtonText>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </TextView>

              <TextView>
                <CalcButtonText>Single pool kt/V</CalcButtonText>
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
                <CalcButtonText>Duration of hemodialysis session (min)</CalcButtonText>
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
                <CalcButtonText>Frequency of hemodialysis sessions per week (times)</CalcButtonText>
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
                <CalcButtonText>Daily urine volume (l)</CalcButtonText>
                <TextInput
                  style={styles.input}
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={handleChange('dailyVolume')}
                  value={values.dailyVolume}
                  onBlur={() => setFieldTouched('dailyVolume')}
                
                />
                {touched.dailyVolume && errors.dailyVolume && <Text style={styles.errorTxt}>{errors.dailyVolume}</Text>}
              </TextView>
              <TextView>
                <CalcButtonText>Weekly fluid intake (l)</CalcButtonText>
                <TextInput
                  style={styles.input}
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={handleChange('fluidIntake')}
                  value={values.fluidIntake}
                  onBlur={() => setFieldTouched('fluidIntake')}
                  
                />
                {touched.fluidIntake && errors.fluidIntake && <Text style={styles.errorTxt}>{errors.fluidIntake}</Text>}
              </TextView>
              <TextView>
                <CalcButtonText>Urine urea consentration (mmol/l)</CalcButtonText>
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
                <CalcButtonText>Urea content in blood plasmabefore hemodialysis (mmol/l)</CalcButtonText>
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
                <CalcButtonText>Metdyalisis period (in days)</CalcButtonText>
                <TextView3>
                  <CalcButtonText>Short</CalcButtonText>
                  <RadioButton
                    value={"short"}
                    status={checked === 'short' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('short')}
                  />
                  <CalcButtonText>Long</CalcButtonText>
                  <RadioButton
                    value={"long"}
                    status={checked === 'long' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('long')}
                  />
                </TextView3>
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
                <CalcButtonText>Height</CalcButtonText>
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
                <CalcButtonText>Width</CalcButtonText>
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
                <CalcButtonText>Sex</CalcButtonText>
                <TextView3>
                  <CalcButtonText>Male</CalcButtonText>
                  <RadioButton
                    value={"male"}
                    status={checked1 === 'male' ? 'checked1' : 'unchecked1'}
                    onPress={() => setChecked1('male')}
                  />
                  <CalcButtonText>Female</CalcButtonText>
                  <RadioButton
                    value={"female"}
                    status={checked1 === 'female' ? 'checked1' : 'unchecked1'}
                    onPress={() => setChecked1('female')}
                  />
                </TextView3>
              </TextView>

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[styles.submitBtn, { backgroundColor: isValid ? '#CD5C5C' : '#E9967A' }]}
              >
                <Text style={styles.submitBtnText}>See results</Text>
              </TouchableOpacity>
              <TextView>
                <SubTitle>Results:</SubTitle>
                <CalcButtonText>Equilibrated clearance (ekt/V)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={eqClearance} />
                <CalcButtonText>Standart weekly clearance (stdkt/V)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={stClearance} />
                <CalcButtonText>Standart weekly clearance dializer (stdkt/V(dialysis))</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={stDiaClearance} />
                <CalcButtonText>Native renal clearance of urea (KRU) (ml/min)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={nativeClearance} />
                <CalcButtonText>Corrected native renal clearance of urea (aKRU)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={cNativeClearance} />
                <CalcButtonText>Standart weekly renal clearance (stdkt/V(renal))</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={stWeeklyClearance} />
                <CalcButtonText>Total weekly urea clearance (dializer+renal)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={twucClearance} />

                <SubTitle>Optional results:</SubTitle>
                <CalcButtonText>Adjusted weekly urine volume (l)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={wUrineVolume} />
                <CalcButtonText>Volume of fluid remove during hemodialysis sessions per week (l)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={removeFluid} />
                <CalcButtonText>Volume of distribution of urea (l)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={distributionUrea} />
                <CalcButtonText>Corrected plasma urea (mmol/l)</CalcButtonText>
                <TextInput style={styles.numericInput} editable={false} value={cPlasmaUrea} />
                <ResCalc>
                  <MenuButtonText>Save</MenuButtonText>
                </ResCalc>
                <ResCalc>
                  <MenuButtonText>Clear</MenuButtonText>
                </ResCalc>
              </TextView>
            </WelcomeContainer2>
          </>
        </SafeAreaView>
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
