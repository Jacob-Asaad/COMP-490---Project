import { View, SafeAreaView, Text, Image, Switch, plantProfileStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { plantProfileStyles } from '../../components/Styles/Styling';



const PlantProfileScreen = () => {

  return (
    <SafeAreaView style={plantProfileStyles.container}>
         <Text style = {plantProfileStyles.errorText}> 
         Coming Soon!
         </Text>
    </SafeAreaView>
  );
}


      

export default PlantProfileScreen