import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackgroundComponent } from 'react-native';
import React from 'react';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';


const App = () => {
  return (
    <View style={styles.root}>
    <SignUpScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const  styles = StyleSheet.create({
root: {
  flex: 1,
  backgroundColor: '#F9FBFC'
} 
});

export default App;
