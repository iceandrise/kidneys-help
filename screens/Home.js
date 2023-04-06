import React, { useContext, useState } from 'react';
import themeContext from '../theme/themeContext';
import {
  ItemsView,
  MenuButtonText,
  StyledButtonMain,
  TextLink2,
  TextLinkContent2,
  WelcomeContainer2,
  WelcomeContainer6,
  WelcomeImage,
} from './../components/styles';
import { SafeAreaView, StatusBar } from 'react-native';

const Home = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, paddingLeft: 24 }}>
      <WelcomeContainer6 style={[{ backgroundColor: theme.backgroundColor }]}>
        <TextLink2 onPress={() => navigation.navigate('Options')}>
          <TextLinkContent2>More</TextLinkContent2>
        </TextLink2>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
      </WelcomeContainer6>
      <>
        <WelcomeContainer2 style={[{ backgroundColor: theme.backgroundColor }]}>
          <ItemsView>
            <StyledButtonMain onPress={() => navigation.navigate('Calculator')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/calculator.png')} />
              <MenuButtonText>Calculators</MenuButtonText>
            </StyledButtonMain>
            <StyledButtonMain onPress={() => navigation.navigate('Patients')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/patient.png')} />
              <MenuButtonText>My patients</MenuButtonText>
            </StyledButtonMain>
          </ItemsView>
          <ItemsView>
            <StyledButtonMain onPress={() => navigation.navigate('Premium')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/premium.png')} />
              <MenuButtonText>Premium</MenuButtonText>
            </StyledButtonMain>
            <StyledButtonMain onPress={() => navigation.navigate('Diary')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/book.png')} />
              <MenuButtonText>Patient's diary</MenuButtonText>
            </StyledButtonMain>
          </ItemsView>
          <ItemsView>
            <StyledButtonMain>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/info.png')} />
              <MenuButtonText>Help with app</MenuButtonText>
            </StyledButtonMain>
            <StyledButtonMain onPress={() => navigation.navigate('Payment')}>
              <WelcomeImage resizeMode="cover" source={require('./../assets/image/payment.png')} />
              <MenuButtonText>Payment</MenuButtonText>
            </StyledButtonMain>
          </ItemsView>
        </WelcomeContainer2>
      </>
    </SafeAreaView>
  );
};

export default Home;
