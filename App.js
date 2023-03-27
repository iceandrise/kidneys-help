import React from 'react';
import RootStack from './navigators/RootStack';
import {AuthContextProvider} from './provider/AuthContext'

export default function App() {
  return <AuthContextProvider> <RootStack /> </AuthContextProvider>;
}
