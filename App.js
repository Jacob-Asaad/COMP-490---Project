import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackgroundComponent } from 'react-native';
import React from 'react';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import PlantHubScreen from './screens/PlantHubScreen/PlantHubScreen';
import Plant from './components/Plant/Plant';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';
import { firebase } from './config';



const App = () => {


  return (
    <NavigationContainer style = {styles.root}>
     <Tabs/>
    <StatusBar style="auto" />
     </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

export default App;
