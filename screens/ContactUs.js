import { Fontisto } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import {
  Colors,
  MenuButtonText,
  StyledButtonCalc,
  SubTitle,
  TextView,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MainTitle,
} from './../components/styles';

const ContactUs = ({ navigation }) => {
  const { brand, darkLight, primary } = Colors;
  const [isAvailable, setIsAvailable] = useState(false);
  const [recipients, setResipients] = useState([]);
  const [subject, setSubject] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }
    checkAvailability();
  }, []);

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: 'I have a problem in KidneysHelp app.',
      body: 'About my problem:',
      recipients: ['kidneyshelp000@gmail.com'],
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Contact us</MainTitle>
      </WelcomeContainer>
      <WelcomeContainer2>
        <TextView>
          <StyledButtonCalc onPress={() => Linking.openURL('https://instagram.com/kidneys_help?igshid=YmMyMTA2M2Y=')}>
            <Fontisto name="instagram" color={brand} size={25} />
            <MenuButtonText>Contact us with Instagram</MenuButtonText>
          </StyledButtonCalc>

          <StyledButtonCalc onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100090866024411')}>
            <Fontisto name="facebook" color={brand} size={25} />
            <MenuButtonText>Contact us with Facebook</MenuButtonText>
          </StyledButtonCalc>

          <StyledButtonCalc onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/#inbox?compose=new')}>
            <Fontisto name="email" color={brand} size={25} />
            <MenuButtonText>Contact us with Gmail</MenuButtonText>
            <MenuButtonText>kidneyshelp000@gmail.com</MenuButtonText>
          </StyledButtonCalc>
        </TextView>
      </WelcomeContainer2>
    </>
  );
};

export default ContactUs;
