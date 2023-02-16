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
}

const {primary, secondary, tertiary, darkLight, brand, gray, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 70}px;
    background-color: ${primary};
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 70px;
    height: 70px;
`
export const PageTitle = styled.Text`
    font-size: 40px;
    text-align: center;
    font-weight: normal;
    font-family: cursive;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: maroon;
    color: ${brand};
    padding: 10px;
`
export const SubTitle = styled.Text`
    font-size: 18px;
    font-family: cursive;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`
export const StyledFormArea = styled.View`
    width: 90%;
`
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`
export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`
export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${gray};
        flex-direction: row;
        justify-content: center;
    `}
`
export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding: 25px;
`}
`
export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`
export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`
export const ExtraView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: ${tertiary};
`

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`
export const TextLinkContent = styled.Text`
    font-size: 15px;
    color: ${brand};
`
export const WelcomeConainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`