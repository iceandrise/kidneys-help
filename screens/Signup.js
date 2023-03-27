import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { Colors } from './../components/styles';
import CountryPicker from 'react-native-country-picker-modal';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledInputLabel,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from './../components/styles';

const { brand, darkLight, primary } = Colors;
import KeyboardSet from '../components/keyboardSet';

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardSet>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>KidneysHelp</PageTitle>
          <SubTitle>Signup</SubTitle>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              profession: '',
              country: '',
              speciality: '',
              workPlace: '',
              confirmPassword: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate('Home');
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="First name"
                  icon="person-add"
                  placeholder="Jack"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />

                <MyTextInput
                  label="Last name"
                  icon="person-add"
                  placeholder="Porter"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />

                <MyTextInput
                  label="Country"
                  icon="globe"
                  placeholder="--"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                />

                <MyTextInput
                  label="Profession"
                  icon="mortar-board"
                  placeholder="Doctor"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('profession')}
                  onBlur={handleBlur('profession')}
                  value={values.profession}
                />

                <MyTextInput
                  label="Speciality"
                  icon="mortar-board"
                  placeholder="Nephrologist"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('speciality')}
                  onBlur={handleBlur('speciality')}
                  value={values.speciality}
                />

                <MyTextInput
                  label="Work place"
                  icon="organization"
                  placeholder="NYU Medical Center"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('workPlace')}
                  onBlur={handleBlur('workPlace')}
                  value={values.workPlace}
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="*********"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="*********"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Signup</ButtonText>
                </StyledButton>

                <Line />

                <ExtraView>
                  <ExtraText>Already have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('Home')}>
                    <TextLinkContent>Login now!</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardSet>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
