import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { AuthRoutes } from './src/Routes/auth.routes';

export default function App() {
  return (
    
      <NavigationContainer>
          <AuthRoutes />
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: 'center',
   // justifyContent: 'center',
  },
  
});
