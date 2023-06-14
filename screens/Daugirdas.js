import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Box, Button, CheckIcon, Select } from 'native-base';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { useGetPatients } from '../services/hooks/useGetPatients';
import { CalcButtonText, MainTitle, TextView, WelcomeContainer2, WelcomeContainer6 } from './../components/styles';
import { useCalcResultMutation } from '../services/hooks/useCalcResultMutation';
import { DUAGIRDAS_CALC } from '../constant';
import { useTranslation } from 'react-i18next';

const SignUpSchema = Yup.object().shape({
  postUrea: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  preUrea: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  UF: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  Weight: Yup.number().max(200, 'enter a number less than or equal to 200'),
  durationHemo: Yup.number().max(1000, 'enter a number less than or equal to 1000'),
  patientId: Yup.string().optional(),
  date: Yup.string().optional(),
});

const Daugirdas = ({ navigation }) => {
  const { navigate } = useNavigation();
  const { addCalcResult, loading } = useCalcResultMutation();
  const { patients } = useGetPatients();
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation(['common', 'calculators']);

  const items = useMemo(() => {
    const result = patients.map((patient) => ({
      label: `${patient.firstName} ${patient.lastName}`,
      value: patient.id,
    }));
    return result;
  }, [patients]);

  const test = (input) => {
    const { postUrea, preUrea, UF, Weight, durationHemo } = input;

    let singlePool = -1 * (Math.log((postUrea / preUrea) - 0.03)) + (4 - 3.5 * (postUrea / preUrea)) * (UF / Weight);
    let adequacy = singlePool *(( 0.47 * singlePool) / durationHemo) + 0.02;

    const result = {
      patientId: selectedItem,
      date: new Date().toLocaleDateString(),
      singlePool,
      adequacy,
    };
    console.log(result);
    return result;
  };

  return (
    <ScrollView removeClippedSubviews showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <Formik
        initialValues={{
          postUrea: '',
          preUrea: '',
          UF: '',
          Weight: '',
          durationHemo: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const result = test(values);
          addCalcResult(result, DUAGIRDAS_CALC).then(() => navigate(DUAGIRDAS_CALC));
        }}
      >
        {({ values, errors, touched, handleChange, setFieldTouched, onBlur, isValid, handleSubmit }) => (
          <>
            <WelcomeContainer6>
              {/* <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} /> */}

              <MainTitle>{t('common:Daugirdas')}</MainTitle>
            </WelcomeContainer6>
            <>
              <WelcomeContainer2>
                <Button size="sm" variant="subtle" colorScheme="secondary" onPress={() => navigate(DUAGIRDAS_CALC)}>
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
                  <CalcButtonText>{t('common:Post_urea')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('postUrea')}
                    value={values.postUrea}
                    onBlur={() => setFieldTouched('postUrea')}
                  />
                  {touched.postUrea && errors.postUrea && <Text style={styles.errorTxt}>{errors.postUrea}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Pre_urea')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('preUrea')}
                    value={values.preUrea}
                    onBlur={() => setFieldTouched('preUrea')}
                  />
                  {touched.preUrea && errors.preUrea && <Text style={styles.errorTxt}>{errors.preUrea}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Volume_of_ultrafiltrate_removed')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('UF')}
                    value={values.UF}
                    onBlur={() => setFieldTouched('UF')}
                  />
                  {touched.UF && errors.UF && <Text style={styles.errorTxt}>{errors.UF}</Text>}
                </TextView>
                <TextView>
                  <CalcButtonText>{t('common:Weight')}</CalcButtonText>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    keyboardType="number-pad"
                    onChangeText={handleChange('Weight')}
                    value={values.Weight}
                    onBlur={() => setFieldTouched('Weight')}
                  />
                  {touched.Weight && errors.Weight && <Text style={styles.errorTxt}>{errors.Weight}</Text>}
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

export default Daugirdas;
