import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import {Formik} from 'formik';
import {Octicons} from '@expo/vector-icons';
import {Colors} from './../components/styles';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledInputLabel, LeftIcon, RightIcon, StyledTextInput,

} from './../components/styles';

const {brand, darkLight} = Colors;

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/image/logo.png')}/>
                <PageTitle>KidneysHelp</PageTitle>
                <SubTitle>Log In</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) =>{
                        console.log(values)
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput 
                            label="Email"
                            icon="mail"
                            placeholder="iceandrise@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({label, icon, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>
                {label}
            </StyledInputLabel>
            <StyledTextInput {...props}/>
        </View>
    )
}

export default Login;