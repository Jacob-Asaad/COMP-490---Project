import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackgroundComponent } from 'react-native';
import React, { useEffect, useState } from 'react';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import PlantHubScreen from './screens/PlantHubScreen/PlantHubScreen';
import Plant from './components/Plant/Plant';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';
import { firebase } from './config';
import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from './screens/EditProfileScreen/EditProfileScreen';


const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //handleUserStateChanges
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    < SignUpScreen >
    </SignUpScreen >
    //<NavigationContainer //style = {styles.root}>
     //<Tabs />
    //<StatusBar style="auto" />
     // </NavigationContainer>

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlantHubScreen"
        component={PlantHubScreen}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}