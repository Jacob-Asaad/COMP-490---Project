import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import SignInScreen from './screens/SignInScreen';


const App = () => {
  return (
    <View style={styles.container}>
    <SignInScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const  styles = StyleSheet.create({
root: {
  flex: 1,

}
});

export default App;
