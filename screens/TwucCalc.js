import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
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
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  ItemsView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';

const TwucCalc = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [singlePool, OnChangeSinglePool] = useState('');
  const [durationHemo, OnChangeDurationHemo] = useState('');
  const [frequencySesions, OnChangeFrequencySessions] = useState('');
  const [dailyVolume, OnChangeDailyVolume] = useState('');
  const [fluidIntake, OnChangeFluidIntake] = useState('');
  const [urineUrea, OnChangeUrineUrea] = useState('');
  const [ureaBlood, OnChangeUreaBlood] = useState('');
  const [age, OnChangeAge] = useState('');
  const [heightP, OnChangeHeight] = useState('');
  const [widthP, OnChangeWidth] = useState('');
  const [sexType, OnChangeSextype] = useState(0);
  const [period, OnChangePeriod] = useState(0);
  const [name, OnChangeName] = useState('Name of patient');
  const [surname, OnChangeSurname] = useState('Surname of patient');
  const [room, OnChangeRoom] = useState('Room');

  let eqClearance = singlePool * (durationHemo / (durationHemo + 30.7));
  let perem = Math.pow(Math.exp, -1 * eqClearance);
  let stClearance =
    (10080 * (1 - perem)) / ((1 - perem) / eqClearance + (10080 / (frequencySesions * durationHemo) - 1));
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
  let stDiaClearance = stClearance / ((1 - 0.74 / frequencySesions) * (removeFluid / distributionUrea));
  let stWeeklyClearance = cNativeClearance * (10080 / distributionUrea);
  let twucClearance = stWeeklyClearance + stDiaClearance;

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>TwucCalc</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextInput style={styles.input} onChangeText={OnChangeSurname} value={surname} />
        <TextInput style={styles.input} onChangeText={OnChangeName} value={name} />
        <TextInput style={styles.numericInput} onChangeText={OnChangeRoom} value={room} />
        <TextView>
          <CalcButtonText>Single pool kt/V</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeSinglePool}
            value={singlePool}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Duration of hemodialysis session (min)</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeDurationHemo}
            value={durationHemo}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Frequency of hemodialysis sessions per week (times)</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeFrequencySessions}
            value={frequencySesions}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Daily urine volume (l)</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeDailyVolume}
            value={dailyVolume}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Weekly fluid intake (l)</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeFluidIntake}
            value={fluidIntake}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Urine urea consentration (mmol/l)</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeUrineUrea}
            value={urineUrea}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Urea content in blood plasmabefore hemodialysis (mmol/l)</CalcButtonText>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={OnChangeUreaBlood}
            value={ureaBlood}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Metdyalisis period (in days)</CalcButtonText>
          <TextView3>
            <StyledButtonAct>
              <ActButtonText>Short</ActButtonText>
            </StyledButtonAct>
            <StyledButtonAct>
              <ActButtonText>Long</ActButtonText>
            </StyledButtonAct>
          </TextView3>
        </TextView>
        <TextView>
          <CalcButtonText>Age</CalcButtonText>
          <TextInput
            style={styles.numericInput}
            maxLength={2}
            keyboardType="numeric"
            onChangeText={OnChangeAge}
            value={age}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Height</CalcButtonText>
          <TextInput
            style={styles.numericInput}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={OnChangeHeight}
            value={heightP}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Width</CalcButtonText>
          <TextInput
            style={styles.numericInput}
            maxLength={3}
            keyboardType="numeric"
            onChangeText={OnChangeWidth}
            value={widthP}
          />
        </TextView>
        <TextView>
          <CalcButtonText>Sex</CalcButtonText>
          <TextView3>
            <StyledButtonAct>
              <ActButtonText>Male</ActButtonText>
            </StyledButtonAct>
            <StyledButtonAct>
              <ActButtonText>Female</ActButtonText>
            </StyledButtonAct>
          </TextView3>
        </TextView>
        <ResCalc>
          <MenuButtonText>See results</MenuButtonText>
        </ResCalc>
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
});

export default TwucCalc;
