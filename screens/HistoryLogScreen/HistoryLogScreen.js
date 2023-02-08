import { View, SafeAreaView, Text, Image, Switch, historyLogStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { historyLogStyles } from '../../components/Styles/Styling';



const HistoryLogScreen = () => {

  return (
    <SafeAreaView style={historyLogStyles.container}>
          
         <Text style = {historyLogStyles.errorText}> 
         No 
         watering 
         history yet!
         </Text>

    </SafeAreaView>
  );
}


      

export default HistoryLogScreen