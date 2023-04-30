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

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    let User_UID;
    if (currentUser) {
      User_UID = currentUser.uid;
    }
    console.log('user UID: ', User_UID);
    if (User_UID) {
      const plantRef = ref(db, '/UsersData/' + User_UID + '/readings');
      onValue(plantRef, (snapshot) => {
        const data = snapshot.val();
        const newReading = Object.keys(data).map((key) => {
          const timestamp = new Date(parseInt(data[key].timestamp) * 1000).toLocaleString();
          return {
            timestamp
          };
        });
        setlogData(newReading.slice(-10));
      });
    }
  }, []);

  return (
    <View styles={[historyLogStyles.container, { backgroundColor: theme.background }]}>
    <Text style={[historyLogStyles.errorText, { color: theme.color }]}> History Log</Text>
    <Text style={[historyLogStyles.lastWateredText, { color: theme.color }]}> Last Watered: </Text>
    {logData.length === 0 ? (
      <Text style={[historyLogStyles.text, { color: theme.color }]}>No Data Available</Text>
    ) : (
      logData.map((log, index) => (
        <View key={index} style={{ marginBottom: 95 }}>
          <Text style={[historyLogStyles.text, { color: theme.color }]}> {log.timestamp}</Text>
        </View>
      ))
    )}
  </View>
);}


      

export default HistoryLogScreen