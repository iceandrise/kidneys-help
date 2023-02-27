import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button} from 'react-native';

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
    ItemsView,
} from './../components/styles';


const Home = ({navigation}) => {
    return (
        <>
            <StatusBar style="light"/>
                <WelcomeContainer>
                    <MenuImage resizeMode="cover" source={require('./../assets/image/menu.png')}/>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')}/>
                </WelcomeContainer>
                <WelcomeContainer2>
                    <ItemsView>
                <StyledButtonMain>
                            <MenuButtonText>
                                Calculato
                            </MenuButtonText>
                </StyledButtonMain>
                <StyledButtonMain>
                            <MenuButtonText>
                                My patients
                            </MenuButtonText>
                </StyledButtonMain>
                </ItemsView>
                <ItemsView>
                <StyledButtonMain>
                            <MenuButtonText>
                                Dynamics
                            </MenuButtonText>
                </StyledButtonMain>
                <StyledButtonMain>
                            <MenuButtonText>
                                Personal Info
                            </MenuButtonText>
                </StyledButtonMain>
                </ItemsView>
                <ItemsView>
                <StyledButtonMain>
                            <MenuButtonText>
                                Help with app
                            </MenuButtonText>
                </StyledButtonMain>
                <StyledButtonMain>
                            <MenuButtonText>
                                Payment
                            </MenuButtonText>
                </StyledButtonMain>
                </ItemsView>

                </WelcomeContainer2>
        </>
    )
}

export default Home;