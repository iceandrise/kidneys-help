import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  PageTitle,
  TextContent,
  TextLink,
  WelcomeContainer,
  WelcomeContainer2,
  WelcomeImage,
  MainTitle,
} from './../components/styles';

const Privacy = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" bounces={false}>
      <StatusBar style="light" />
      <WelcomeContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/image/logo.png')} />
        <MainTitle>Privacy</MainTitle>
      </WelcomeContainer>

      <WelcomeContainer2>
        <PageTitle>Privacy Policy</PageTitle>
        <TextLink>
          <TextContent>
            Dear doctors! Please read this privacy policy carefully to understand our practices about how we collect,
            use, and share your Personal Data.A) ABOUT OUR PRIVACY POLICY This privacy policy describes how the Personal
            Data that is collected.B) INFORMATION WE COLLECT The Policy collects information from you in one way:
            directly from your input.The types of Personal Data that the KidneysHelp collects directly from you may
            include: • Contact details; • Educational and professional background information; • Usernames and
            passwords;If you choose to register and sign in by using a third party account, the authentication of your
            login is handled by the third party and the KidneysHelp will collect your name, email address, and any other
            information about your third-party account that you agree to share with us at the time you give permission
            for your account on the Service to be linked to your third party account. KidneysHelp is a Data Controller
            (as defined in Data Protection Legislation) in respect to this 'Personal Data'. The legal basis upon which
            we process Personal Data is our legitimate interest to provide Services to you. The KidneysHelp also
            automatically collects, through our servers and other technologies, information that tells us how you use
            the Service, such as: • Internet Protocol ("IP") address used to connect your computer to the internet is
            temporarily stored by our web server for security, maintenance and product improvement purposes and is not
            connected to Personal Data; • Uniform Resource Locator ("URL") click stream data, including date and time
            stamp, referring and exit URLs, search terms you used, and pages you visited or searched for on the Service;
            and For location-aware services, the physical location of your device in order to provide you with more
            relevant content for where you are in the world.When you use our Services, in addition to information
            described in our Policy, such as your profile, we may automatically collect certain information from your
            device including information about your device such as the device type, device ID, operating system,
            wireless service provider, and information about the operation of our application and your usage of our
            application, including features you used, pages you viewed, and when and for how long you used the
            application. By using the KidneysHelp Services, you agree that we may collect this information and use,
            transmit, process, and store that information as described in our Privacy Policy including to provide and
            improve our Services. We may use and disclose information that does not reveal your identity or permit
            direct association with any specific individual, such as browser and device information, anonymous usage
            data, and aggregated information, for any purpose, except where we are restricted by law. Upon request, you
            have the right to receive a structured, common and machine-readable format of the Personal Data you provided
            to us. We may need to request specific information from you to help us confirm your identity and ensure your
            right to access your Personal Data (or to exercise any of your other rights). This is a security measure to
            ensure that you are the data subject entitled to receive such Personal Data.You will not have to pay a fee
            to access your Personal Data. However, we may charge a reasonable fee if your request is clearly unfounded,
            repetitive, or excessive. Alternatively, we may refuse to comply with your request in these circumstances.
            Registered users can access their account information and make corrections or updates upon login at any
            time. The accuracy of such information is solely the responsibility of the user. We will endeavor to fulfill
            your request within 30 days but some Personal Data may persist in backup copies for a certain period of time
            and may be retained as necessary for legitimate business purposes or to comply with our legal obligations.
            You further agree that GrandCoCo shall not be held liable with respect to any loss and/or damage to your
            Personal Data if you choose to withdraw consent. To exercise any of the rights mentioned in this Privacy
            Policy and/or in the event of questions or comments relating to the use of Personal Data, you may contact
            GrandCoCo's support team: kidneyshelp000@gmail.com. GrandCoCo takes precautions to safeguard your Personal
            Data against loss, theft and misuse and unauthorized access, disclosure, alteration, and destruction through
            the use of appropriate administrative, physical and technical security measures.Your Personal Data is
            contained behind secured networks and is only accessible by a limited number of persons who have special
            access rights to such systems, and are required to keep the information confidential. Personal Data and
            usage data is stored as long as is necessary for the purpose(s) for which we originally collected it. We may
            also retain information as required by law. We may change this privacy policy from time to time.
            Occasionally, at our discretion, we may include or offer third-party products or services on our website.
            These third-party sites have separate and independent privacy policies. We, therefore, have no
            responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to
            protect the integrity of our site and welcome any feedback about these sites.
          </TextContent>
        </TextLink>
      </WelcomeContainer2>
    </ScrollView>
  );
};

export default Privacy;
