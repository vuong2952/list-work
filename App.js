/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Route from './src/navigation/Route';
import AuthProvider from './src/context/AuthContext';


function App() {
  return (
    // <AuthProvider>
      <Route />
    // </AuthProvider>

  );
}

export default App;
