import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useGetPatients } from '../services/hooks/useGetPatients';
import { usePatientMutation } from '../services/hooks/usePatientMutation';
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
        <MainTitle>My patients</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <Searchbar placeholder="Search patient" onChangeText={onChangeSearch} value={searchQuery} />
          <StyledButtonAct onPress={() => navigation.navigate('AddPatient')}>
            <ActButtonText>New</ActButtonText>
          </StyledButtonAct>
        </TextView>
        <ScrollView style={{ flex: 1, width: '100%' }} showsVerticalScrollIndicator={false}>
          {!loading ? (
            patients &&
            patients.map((patient) => (
              <StyledPatient key={patient.id}>
                <ItemsView>
                  <TextView2>
                    <CalcButtonText>Name Patient: {patient?.firstName}</CalcButtonText>
                    <CalcButtonText>Surname Patient: {patient?.lastName}</CalcButtonText>
                    <CalcButtonText>{patient?.room}</CalcButtonText>
                  </TextView2>

                  <TextView2>
                    <StyledButtonAct
                      onPress={() => {
                        removePatient(patient.id);
                        refetch();
                      }}
                    >
                      <ActButtonText>Delete</ActButtonText>
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
