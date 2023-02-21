import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from './../components/styles';


const Home = ({navigation}) => {
    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')}/>


                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome to KidneysHelp</PageTitle>
                    <SubTitle welcome={true}>Name</SubTitle>
                    <SubTitle welcome={true}>Email</SubTitle>
                        <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/image/logo.png')}/>
                        <Line />
                            <StyledButton onPress={() => {navigation.navigate("Login")}}>
                                <ButtonText>
                                Logout
                                </ButtonText>
                            </StyledButton>

                        

                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    )
}

export default Home;