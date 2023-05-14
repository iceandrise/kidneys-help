import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ItemsViewDop,
  TextContent,
  TextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
} from './../components/styles';
import { useAuthContext } from '../provider/AuthContext';

const Options = ({ navigation }) => {
  const { logOut } = useAuthContext();
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer>

      <WelcomeContainer2>
        <ItemsViewDop>
          <WelcomeImage resizeMode="cover" source={require('./../assets/image/setting.png')} />
          <TextLink onPress={() => navigation.navigate('Settings')}>
            <TextContent>Settings</TextContent>
          </TextLink>
        </ItemsViewDop>
        <ItemsViewDop>
          <WelcomeImage resizeMode="cover" source={require('./../assets/image/condition.png')} />
          <TextLink onPress={() => navigation.navigate('Terms')}>
            <TextContent>Terms and Conditions</TextContent>
          </TextLink>
        </ItemsViewDop>
        <ItemsViewDop>
          <WelcomeImage resizeMode="cover" source={require('./../assets/image/privacy.png')} />
          <TextLink onPress={() => navigation.navigate('Privacy')}>
            <TextContent>Privacy Policy</TextContent>
          </TextLink>
        </ItemsViewDop>
        <ItemsViewDop>
          <WelcomeImage resizeMode="cover" source={require('./../assets/image/logout.png')} />
          <TextLink onPress={() => logOut()}>
            <TextContent>Logout</TextContent>
          </TextLink>
        </ItemsViewDop>
      </WelcomeContainer2>
    </>
  );
};

export default Options;
