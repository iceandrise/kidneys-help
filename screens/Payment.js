import { StatusBar } from 'expo-status-bar';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import {
  MenuButtonText,
  PageTitle,
  MainTitle,
  StyledFormArea,
  ResCalc,
  CalcButtonText,
  TextView5,
  TextView2,
  TextView4,
  TextView3,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MainImage,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';
import { useSubscriptionContext } from '../provider/SubscribeProvider';

const Payment = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cardNumber, OnChangeCardNumber] = useState('');
  const [cardHolder, OnChangeCardHolder] = useState('');
  const [mm, OnChangeMM] = useState('');
  const [yy, OnChangeYY] = useState('');
  const [cvv, OnChangeCVV] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const { onSubscribe } = useSubscriptionContext();
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Payment</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <MainImage resizeMode="cover" source={require('./../assets/image/card.png')} />
          <TextView>
            <CalcButtonText>CARD NUMBER</CalcButtonText>
            <TextInput
              style={styles.input}
              maxLength={16}
              keyboardType="default"
              onChangeText={OnChangeCardNumber}
              value={cardNumber}
            />
          </TextView>
          <TextView>
            <CalcButtonText>CARD HOLDER</CalcButtonText>
            <TextInput
              style={styles.input}
              keyboardType="default"
              maxLength={20}
              onChangeText={OnChangeCardHolder}
              value={cardHolder}
            />
          </TextView>
        </TextView>
        <TextView4>
          <TextView5>
            <CalcButtonText>MM</CalcButtonText>
            <TextInput
              style={styles.numInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={OnChangeMM}
              value={mm}
            />
          </TextView5>
          <TextView5>
            <CalcButtonText>YY</CalcButtonText>
            <TextInput
              style={styles.numInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={OnChangeYY}
              value={yy}
            />
          </TextView5>
          <TextView5>
            <CalcButtonText>CVV</CalcButtonText>
            <TextInput
              style={styles.numInput}
              maxLength={3}
              keyboardType="number-pad"
              onChangeText={OnChangeCVV}
              value={cvv}
            />
          </TextView5>
        </TextView4>
        <ResCalc
          onPress={() => {
            onSubscribe();
            navigation.navigate('Calculator');
          }}
        >
          <MenuButtonText>Pay</MenuButtonText>
        </ResCalc>
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
  numInput: {
    height: 40,
    width: 70,
    margin: 5,
    borderWidth: 1,
  },
});

export default Payment;
