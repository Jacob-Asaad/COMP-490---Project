import { View, SafeAreaView, Text, Image, Switch, historyLogStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState, useEffect } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { historyLogStyles } from '../../components/Styles/Styling';
import {ref, onValue} from "firebase/database";
import { db, firebase } from '../../config';


const HistoryLogScreen = () => {
  const [LogData, setLogData] = useState([]);

  useEffect(() => {
    const LogRef = ref(db, 'water-log/2-push/')
     onValue(LogRef, (snapshot) => {
       const data = snapshot.val();
       const logReading = Object.keys(data).map((key) => ({
         id:key,
         ...data[key]
       }));
       setLogData(logReading);
     });
   }, [])



   return (
   <View style={historyLogStyles.container}>
 <Text style={historyLogStyles.header}>  </Text>
 {
   LogData.map((item, index) => {
     return(
       <View key={index}>
         
         <Text style={historyLogStyles.text}> {item.id}</Text>
       </View>
     )
   })
 }
 
   </View>


   )
}
   /*
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

*/
      

export default HistoryLogScreen