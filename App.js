import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import MainScreen from './src/screens';
import Color from './src/util/color';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <MainScreen/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.lightGray ,
    marginTop:45,
   
    
  },
});
