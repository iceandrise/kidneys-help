import { StatusBar } from 'expo-status-bar';
import { View, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
  InnerContainer,
  PageTitle,
  MainTitle,
  StyledFormArea,
  TextContent,
  MenuButtonText,
  ActButtonText,
  Colors,
  StyledPatient,
  StyledButtonCalc,
  WelcomeContainer2,
  WelcomeContainer,
  WelcomeContainer3,
  WelcomeImage,
  ItemsView,
  TextView,
} from './../components/styles';
import { Searchbar } from 'react-native-paper';

const Chart = ({ navigation }) => {
  const { brand, darkLight, primary } = Colors;
  //   const [searchQuery, setSearchQuery] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [name, OnChangeName] = useState('Name of patient');
  const [surname, OnChangeSurname] = useState('Surname of patient');
  const [room, OnChangeRoom] = useState('Room');
  const [age, OnChangeAge] = useState('Age');

  //   const [heightP, OnChangeHeight] = useState('Height');
  //   const [widthP, OnChangeWidth] = useState('Width');
  //   const [preasure, OnChangePreasure] = useState('Preasure');
  //   const [sexP, OnChangeSex] = useState('Sex');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [22, 67, 88, 2, 55, 90],
        color: (opacity = 1) => `rgba(134,65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Nephro Results'],
  };

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(128, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const screenWidth = Dimensions.get('window').width;

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: ' ',
      body: ' ',
      recipients: [' '],
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Chart dynamic</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer3>
        <LineChart data={data} width={screenWidth} height={200} chartConfig={chartConfig} />
        <MenuButtonText>You should drink more water!</MenuButtonText>
        <WelcomeContainer2>
        <StyledButtonCalc onPress={sendMail}>
          <Fontisto name="email" color={brand} size={25} />
          <MenuButtonText>Share message to your doctor!</MenuButtonText>
        </StyledButtonCalc>
        </WelcomeContainer2>
      </WelcomeContainer3>
    </>
  );
};

export default Chart;
