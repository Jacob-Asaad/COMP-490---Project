import { View, SafeAreaView, Text, Image, Switch, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';


const PlantProfileScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
         <Text style = {styles.errorText}> 
         Coming Soon!
         </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
      paddingTop: 20,
      marginRight: 145,
      marginBottom: 5,
    },
  errorText: {
    alignItems: "center",
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 10,
      fontSize: 25,
      fontWeight: "bold",
      padding: 125,
  },


});
      

export default PlantProfileScreen