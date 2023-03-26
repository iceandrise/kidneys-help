import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    StyledButtonMain,
    MenuButtonText,
    Line,
    MsgBox,
    StyledContainer,
    MenuImage,
    WelcomeContainer,
    WelcomeContainer2,
    WelcomeImage,
    Avatar,
    ExtraText,
    ExtraView,
    TextContent,
    TextLink,
    ItemsView,
    ItemsViewDop,
} from './../components/styles';


const Options = ({navigation}) => {
    return (
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')}/>                  
            </WelcomeContainer>

            <WelcomeContainer2>
                <ItemsViewDop>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/setting.png')}/>
                    <TextLink >
                        <TextContent>Settings</TextContent>
                    </TextLink>
                </ItemsViewDop>
                <ItemsViewDop>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/condition.png')}/>
                    <TextLink onPress={() => navigation.navigate("Terms")}>
                        <TextContent>Terms and Conditions</TextContent>
                    </TextLink>
                </ItemsViewDop>
                <ItemsViewDop>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/privacy.png')}/>
                    <TextLink onPress={() => navigation.navigate("Privacy")}>
                        <TextContent>Privacy Policy</TextContent>
                    </TextLink>
                </ItemsViewDop>
                <ItemsViewDop>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/contact.png')}/>
                    <TextLink onPress={() => navigation.navigate("ContactUs")}>
                        <TextContent>Contact Us</TextContent>
                    </TextLink>
                </ItemsViewDop>
                <ItemsViewDop>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/logout.png')}/>
                    <TextLink onPress={() => navigation.navigate("Login")} >
                        <TextContent>Logout</TextContent>
                    </TextLink>
                </ItemsViewDop>
               

            </WelcomeContainer2>
        </>
    )
}

export default Options;