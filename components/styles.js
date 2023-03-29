import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#800000',
  darkLight: '#9CA3AF',
  brand: '#CD5C5C',
  gray: '#A9A9A9',
  red: '#EF4444',
  back: '#FFF5EE',
  lightback: '#FFE4E1',
};

const { primary, secondary, tertiary, darkLight, brand, gray, red, back, lightback } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 70px;
  height: 70px;
`;
export const PageTitle = styled.Text`
  font-size: 40px;
  text-align: center;
  font-weight: normal;
  font-family: 'cursive';
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: maroon;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
        font-size: 35px;
    `}
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: 'cursive';
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
`}
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  font-family: 'cursive';
  margin-left: 15px;
  position: absolute;
  right:0;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;
export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin: 3px 0px;
  margin-bottom: 10px;
  color: ${tertiary};
`;
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;
export const ActIcon = styled.TouchableOpacity`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
        background-color: ${gray};
        flex-direction: row;
        justify-content: center;
    `}
`;
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
        padding: 25px;
`}
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin: 10px 0px;
`;
export const ExtraView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: ${tertiary};
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const SecTextLink = styled.TouchableOpacity`
  justify-content: right;
  right: 0;
  margin-bottom: 20px;
`;

export const TextLinkContent = styled.Text`
  font-size: 15px;
  color: ${brand};
`;

export const TextContent = styled.Text`
  font-size: 18px;
  color: ${brand};
`;

export const WelcomeContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  position: absolute;
`;
export const WelcomeContainer2 = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  width: 100%;
  background-color: ${lightback};
  display: block;
  grid-template-columns: auto auto auto;
  justify-content: center;
  padding: 40px;
  top: 40px;
`;

export const WelcomeImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 10px;
`;
export const WelcomeTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-family: 'cursive';
  color: ${brand};
`;
export const MenuImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
`;
export const StyledButtonMain = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${brand};
  // background-color: ${lightback};
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  height: 140px;
  width: 140px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ItemsView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const TextView2 = styled.View`
  flex-direction: block;
  width: 70%;

`;

export const TextView = styled.View`
  flex-direction: block;
  width: 100%;
`;


export const ItemsViewDop = styled.View`
  justify-content: start;
  flex-direction: row;
  padding: 15px;
  width: 100%;
`;

export const MenuButtonText = styled.Text`
  color: ${brand};
  font-weight: bold;
  font-size: 16px;
`;
export const CalcButtonText = styled.Text`
  color: ${brand};
  font-weight: bold;
  font-size: 16px;
`;

export const ActButtonText = styled.Text`
  color: ${lightback};
  font-weight: bold;
  font-size: 16px;
`;

export const StyledButtonCalc = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 70px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const StyledPatient = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 100px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledButtonAct = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${lightback};
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  width: 40%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledButtonPremium = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${brand};
  background-color: ${lightback};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 70px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
