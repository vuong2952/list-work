/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import Route from './src/navigation/Route';

function App() {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
    
  );
}

export default App;
