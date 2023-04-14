import React from 'react';
import RootStack from './navigators/RootStack';
import { AuthContextProvider } from './provider/AuthContext';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <AuthContextProvider>
      <NativeBaseProvider>
        <RootStack />
      </NativeBaseProvider>
    </AuthContextProvider>
  );
}
