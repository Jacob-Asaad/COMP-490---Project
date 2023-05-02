import { View, SafeAreaView, Text, Image, Switch, historyLogStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { historyLogStyles } from '../../components/Styles/Styling';
import { db, firebase } from '../../config';
import {ref, onValue} from "firebase/database";
import themeContext from '../../theme/themeContext';


const HistoryLogScreen = () => {
  const theme = useContext(themeContext);
  const [logData, setlogData] = useState([]);
  const [User_UID, setUser_UID] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    let User_UID;
    if (currentUser) {
      User_UID = currentUser.uid;
    }
    setUser_UID(User_UID);
    console.log('user UID: ', User_UID);
    if (User_UID === `foveQTWg8wTT7kAMgXV5FCwoJLC2`) {
      const plantRef = ref(db, '/UsersData/' + User_UID + '/readings');
      onValue(plantRef, (snapshot) => {
        const data = snapshot.val();
        
        const newReading = Object.keys(data)
      .sort((a, b) => data[b].timestamp - data[a].timestamp) // sort by timestamp in descending order
      .map((key) => { 
          const timestamp = new Date(parseInt(data[key].timestamp) * 1000).toLocaleString();
          return {
            timestamp
          };
        });
        setlogData(newReading.slice(-10));
      });
    } else {
      const plantRef = ref(db, '/waterLog/1-set/');
      onValue(plantRef, (snapshot) => {
        const data = snapshot.val();
        const newLog = Object.keys(data).map((key) => ({
          data,
          ...data[key],
        }));
        let Log = newLog[0]['data']['lastWatered'];
        console.log(Log);
        let currentLogs = logData.slice();
  
        // Add the new log to the beginning of the array
        currentLogs.unshift(data);
  
        // Keep only the last 10 logs
        let newLogs = currentLogs.slice(0, 10);
        setlogData(newLog);
      });
    }
  }, []);
  

  return (
    <>
      {User_UID === 'foveQTWg8wTT7kAMgXV5FCwoJLC2' ? (
        <View style={[historyLogStyles.container, { backgroundColor: theme.background, flex: 1 }]}>
          <Text style={[historyLogStyles.errorText, { color: theme.color }]}> History Log</Text>
          <Text style={[historyLogStyles.lastWateredText, { color: theme.color }]}> Last Watered: </Text>
          {logData.map((log, index) => (
            <View key={index} style={{ marginBottom: 95 }}>
              <Text style={[historyLogStyles.text, { color: theme.color }]}> {log.timestamp}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={[historyLogStyles.container, { backgroundColor: theme.background, flex: 1, marginBottom: 655 }]}>
          <Text style = {[historyLogStyles.errorText,{color: theme.color}]}> History Log</Text>
          <Text style={[historyLogStyles.text,{color: theme.color}]}> {logData[0]?.data?.lastWatered}</Text>
        </View>
      )}
    </>
  );
};







      

export default HistoryLogScreen