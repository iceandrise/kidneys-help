import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import {
    PageTitle,
    TextContent,
    TextLink,
    WelcomeContainer,
    WelcomeContainer2,
    WelcomeImage,
    Main2Image,
    MainTitle,
    Main1Image,
    Main3Image,
    Main4Image
} from './../components/styles';

const Help = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
          <StatusBar style="light" />
          <WelcomeContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
            <MainTitle>User guide</MainTitle>
          </WelcomeContainer>
    
          <WelcomeContainer2>
            <PageTitle>Help with app</PageTitle>
            <TextLink>
              <TextContent>
                Dear doctors! In the "Calculators" tab you can make some calculations using the Nephrology calculators. Here are the calculators "Total weekly urea clearance", "Determining the adequacy of hemodialysis", "Total body water by Watson, Hume-Weyers (for adults) and Mellits-Cheek (for children).
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/calc.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              In the "Patients" tab, you can create your own file by adding and deleting patients. When filling in patient data, you must have: his last name, his first name and room number. It is this information that is correct within the limits of confidentiality.
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/patient.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              In the "Patient Diary" tab, you can analyze such indicators as blood pressure, the amount of fluid drunk and the patient's weight by day of the week. This functionality builds a graph of changes in the selected indicator over time.
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/diary.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              In the "Contact Us" tab, you can not only view our social networks Instagram and Facebook KidneysHelp, but also contact us (both via Gmail and via private messages). Feedback is very important to us! Please let us know about application bugs or suggest new ideas for KidneysHelp. We will be grateful to you!
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/contact.jpeg')} />
            </TextLink>
            <TextLink>
              <TextContent>
              In the "Optional" tab, you will be taken to a special menu.
              </TextContent>
              <Main2Image resizeMode="cover" source={require('./../assets/image/optional.jpeg')} />
              <TextContent>
              This menu contains such tabs as "Settings", "Terms and Conditions", "Privacy Policy" and "Logout". In the "Settings" tab, you can customize the theme and language of the application. You can choose both dark theme and light theme. You can choose both English and Russian.
              </TextContent>
              <Main1Image resizeMode="cover" source={require('./../assets/image/settings.jpeg')} />
              <TextContent>
              In the tabs "Terms and conditions" and "Privacy policy" you can read the rules for using this app KidneysHelp. If you do not agree with our requirements, we ask you to refrain from using KidneysHelp.
              </TextContent>
              <Main3Image resizeMode="cover" source={require('./../assets/image/terms.jpeg')} />
              <Main4Image resizeMode="cover" source={require('./../assets/image/privacy.jpeg')} />
              <TextContent>
              In the "Logout" tabs you can logout from KidneysHelp app.
              </TextContent>
              <Main1Image resizeMode="cover" source={require('./../assets/image/logout.jpeg')} />
            </TextLink>
          </WelcomeContainer2>
        </ScrollView>
      );
    };

export default Help;
