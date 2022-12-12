import { View, SafeAreaView, Text, Image, Switch, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Log from '../../components/History/Log';


const HistoryLogScreen = () => {

  const createLog = function(logName) { //Work in Progress -> ignore for now
    const log = LogName;
    const [LogHistory, setLogHistory] = useState("LogHistory");

  }
 

    return( //returning a plant component to the PlantHubScreen
    <ScrollView showsVerticalScrollIndicator = {false}>
      <View >
        
          <Log
            LogHistory =' Plant 1 was watered on 12/12/2022 12:00'

          />
       
      </View>
    </ScrollView>
    );
  };


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
      

export default HistoryLogScreen