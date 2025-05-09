import React, { useState } from 'react';
import Routes from './src/navigation/Routes';
import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.THEME} barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App