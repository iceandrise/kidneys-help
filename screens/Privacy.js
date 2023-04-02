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
            Dear doctors! Thank you for visiting KidneysHelp. Please read the Terms and Conditions contained in this
            document carefully since any use of this site and all services (defined below) constitutes your acceptance
            of the Terms and Conditions set out herein. If you do not agree to these Terms and Conditions, please do not
            use this website or any other services. We provide KidneysHelp users with access to a wide array of
            resources which may be provided to you in a variety of mediums and devices now known or hereinafter
            developed, including mobile applications. Throughout the collective services, the terms “we”, “us”, “our”,
            “KidneysHelp” refer to GraceCompany, and any of its direct and indirect subsidiaries. “You” refers to any
            person accessing and/or using any of the services. For the purpose of this Terms and Conditions, Personal
            Data means any information relating to an identified or identifiable natural person; an identifiable natural
            person is one who can be identified, directly or indirectly, in particular by reference to an identifier
            such as a name, an identification number, location data, an online identifier or to one or more factors
            specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that
            natural person. We may allow you to submit content and materials for use on our Site via our online
            submission form or email. For example, a calculator, formula, or equation creator may be able to submit
            text, photographs, messages, or videos. The things you post or submit for use on our Site and Communities
            are “User Content”. You agree to these submission guidelines (“Guidelines”), our full Terms and Conditions,
            and any additional terms by submitting User Content. A) ALL USER CONTENT SUBMITTED TO US You agree that your
            User Content are accurate and complete. You also agree that: Your User Content is created exclusively by
            you. This means that you did not copy it from any other source. If you did not create your User Content,
            anyone that created it or helped create it must give you permission to submit your User Content to us. You
            must obtain consent and a release from any person (or the legal guardians of any persons) depicted in your
            User Content before you submit it with full knowledge from these persons that we may exploit it in any
            manner whatsoever. Anyone you get consent from must understand that we will use the content you submit in
            any manner we think is appropriate. Your User Content does not threaten or disparage others. This includes
            not harassing or intimidating other users. It also includes not defaming or libeling anyone. Your User
            Content does not use hateful language. This includes not making negative comments connected to race,
            national origin, or religion. You also cannot disparage someone because of their gender, age, or sexual
            preference. Your User Content does not disclose confidential or Personal Data information about others. Your
            User Content will only disclose Personal Data with the other person’s consent. This also means that your
            User Content does not include information you must keep confidential under contract. This also means that
            your User Content does not violate anyone’s privacy or publicity rights. B) CONTENT AND LIMITATIONS ON USE
            All content contained on or accessed from the Site, including text, graphics, user interfaces, visual
            interfaces, photographs, trademarks, logos, videos, images, applications, programs, computer code and other
            information (collectively, the “Content”), including, but not limited to, the design, layout, “look and
            feel” and arrangement of such Content, is owned by GraceCompany or its licensors and is protected by
            copyright, trademark, and other intellectual property and unfair competition laws. You may print or download
            Content from the Services for your own personal, non-commercial, informational, or scholarly use, provided
            that you keep intact all copyright and other proprietary notices. You may not copy, display, distribute,
            modify, publish, reproduce, store, transmit, post, translate, or create other derivative works from, or
            sell, rent or license all or any part of the Content, products, or services obtained from the Services in
            any medium to anyone, except as otherwise expressly permitted under these Terms and Conditions, relevant
            license or subscription agreement or authorization by us. You may not reverse engineer, disassemble,
            decompile, or translate any software in the Content, or otherwise attempt to derive the source code of such
            software, except to the extent expressly permitted under applicable law, without our prior written
            permission. You may not engage in systematic retrieval of Content from the Services to create or compile,
            directly or indirectly, a collection, compilation, database, or directory without our prior written
            permission.
          </TextContent>
        </TextLink>
      </WelcomeContainer2>
    </ScrollView>
  );
};

export default Privacy;
