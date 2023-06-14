import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useGetPatients } from '../services/hooks/useGetPatients';
import { usePatientMutation } from '../services/hooks/usePatientMutation';
import { useTranslation } from 'react-i18next';
import {
  ActButtonText,
  CalcButtonText,
  ItemsView,
  MainTitle,
  StyledButtonAct,
  StyledPatient,
  TextView,
  TextView2,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
} from './../components/styles';

const Patients = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const { patients, loading, refetch } = useGetPatients();
  const { removePatient } = usePatientMutation();
  const isFocused = useIsFocused();
  const { t } = useTranslation(['common', 'calculators']);
  console.log('render', searchQuery);
  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>{t('common:My_patients')}</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <StyledButtonAct onPress={() => navigation.navigate('AddPatient')}>
            <ActButtonText>{t('common:New')}</ActButtonText>
          </StyledButtonAct>
        </TextView>
        <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
          {!loading ? (
            patients &&
            patients.map((patient) => (
              <StyledPatient key={patient.id}>
                <ItemsView>
                  <TextView2>
                    <CalcButtonText>{t('common:Name_patient')} {patient?.firstName}</CalcButtonText>
                    <CalcButtonText>{t('common:Surname_patient')} {patient?.lastName}</CalcButtonText>
                    <CalcButtonText>{t('common:Room')} {patient?.room}</CalcButtonText>
                  </TextView2>

                  <TextView2>
                    <StyledButtonAct
                      onPress={() => {
                        removePatient(patient.id);
                        refetch();
                      }}
                    >
                      <ActButtonText>{t('common:Delete')}</ActButtonText>
                    </StyledButtonAct>
                  </TextView2>
                </ItemsView>
              </StyledPatient>
            ))
          ) : (
            <ActivityIndicator />
          )}
        </ScrollView>
      </WelcomeContainer2>
    </>
  );
};

export default Patients;
