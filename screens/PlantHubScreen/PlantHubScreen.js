import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity }
  from 'react-native';
import Plant from '../../components/Plant/Plant';
import { circleDisplayStyles } from '../../components/Styles/Styling';
import React, { useEffect, useState, useContext } from 'react';
import { db, auth, firebase } from '../../config';
import {ref, onValue} from "firebase/database";
import {getAuth} from "firebase/auth";
import themeContext from '../../theme/themeContext';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';



const PlantHubScreen = () => {
  const theme = useContext(themeContext);
  const [name, setName] = useState('');
  const [plantData, setplantData] = useState([]);
  const [soil_read, setSoilRead] = useState(null);
  const [room_temp, setRoomTemp] = useState(''); 
  const [soilReading, setSoilReading] = useState('');

  //pull info from firestore database
  useEffect(() => {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then((snapshot) => {
      if (snapshot.exists) {
        setName(snapshot.data());
      } else {
        console.log('user does not exist');
      }
    })
  }, [])

 /* useEffect(() => {
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
        console.log('Data: ', data);
        if (!data) {
          setSoilRead(0);
          setRoomTemp('0°F');
          return;
        }
        const newReading = Object.keys(data).map((key) => ({
          data,
          ...data[key],
        }));
        const lastReading = newReading.slice(-1)[0];
        const soil_read = lastReading['humidity'];
        const room_temp = lastReading['temperature'];      
        console.log(soil_read);
        console.log(room_temp);
        const tempInFahrenheit = (room_temp * 9/5) + 32;
        setplantData(newReading);
        setSoilRead(soil_read);
        setRoomTemp(tempInFahrenheit.toFixed(1) + '°F');
      });
    }
  }, []);
*/

useEffect(() => {
  const currentUser = firebase.auth().currentUser;
  let User_UID;
  if (currentUser) {
    User_UID = currentUser.uid;
  }
  console.log('user UID: ', User_UID);
  if (User_UID === 'foveQTWg8wTT7kAMgXV5FCwoJLC2') {
    const plantRef = ref(db, '/UsersData/' + User_UID + '/readings');
    onValue(plantRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data: ', data);
      if (!data) {
        setSoilRead(0);
        setRoomTemp('0°F');
        return;
      }
      const newReading = Object.keys(data).map((key) => ({
        data,
        ...data[key],
      }));
      const lastReading = newReading.slice(-1)[0];
      const soil_read = lastReading['humidity'];
      const room_temp = lastReading['temperature'];  
      const soil_reading_status = getSoilReadingStatus(soil_read, room_temp);    
      console.log(soil_read);
      console.log(room_temp);
      const tempInFahrenheit = (room_temp * 9/5) + 32;
      setplantData(newReading);
      setSoilRead(((soil_read - 200) / (2000 - 200) * 100).toFixed(1) + '%');
      setRoomTemp(tempInFahrenheit.toFixed(1) + '°F');
      setSoilReading(soil_reading_status);
    });
  } else {
    const plantRef = ref(db, '/moistureSensor/');
    onValue(plantRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data: ', data);
      if (!data) {
        setSoilRead(0);
        setRoomTemp('0°F');
        return;
      }
      const newReading = Object.keys(data).map((key) => ({
        data,
        ...data[key],
      }));
      const soil_read = newReading[0]['data']['moistureReading'];
      const room_temp = newReading[0]['data']['roomTemp'];      
      const soil_reading_status = getSoilReadingStatus(soil_read, room_temp);    
      console.log(soil_read);
      console.log(room_temp);
      const tempInFahrenheit = (room_temp * 9/5) + 32;
      setplantData(newReading);
      setSoilRead(((soil_read - 200) / (2000 - 200) * 100).toFixed(1) + '%');
      setRoomTemp(tempInFahrenheit.toFixed(1) + '°F');
      setSoilReading(soil_reading_status);
    });
  }
}, []);

function getSoilReadingStatus(soil_read, room_temp) {
  const humidity_percent = ((soil_read - 200) / (2000 - 200)) * 100;
  const temp_fahrenheit = (room_temp * 9/5) + 32;

  if (humidity_percent >= 60 && temp_fahrenheit >= 65) {
    return "Good";
  } else if (humidity_percent >= 30 && temp_fahrenheit >= 55)  {
    return "Fair";
  } else {
    return "Bad";
  }
}



  

   /*
  return (
    <View styles={styles.container}>
      <Text style={styles.header}> </Text>
      <Text> Temperature: {soil_read} {'\n'}
        Moisture: {plantData[0]?.data?.roomTemp}
      </Text>
    </View>
  )
}
*/  


 
 /* function createPlant(plantName) {
    const name = plantName;
    const [soilLevel, setSoilLevel] = useState("soilReading");
    const [temp, setTemp] = useState("tempReading");
    const [humidity, setHumidity] = useState("humidityReading");
      <View style={[circleDisplayStyles.container, {}]}>
        <Text style={circleDisplayStyles.headerText}>Plant </Text>
        <View style={circleDisplayStyles.CircleShape}/>
      </View>
    
  }; */

  return ( //returning a plant component to the PlantHubScreen Hello {name.firsName}
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <View>
        <Text style={[circleDisplayStyles.plantText,{color: theme.color}]}> Hello, {name.firstName}! </Text>
        <Text>
          <Plant
            name='Plant 1'
            image = {require('../../assets/images/cactusplant.png')}
            soilLevel='Soil Level'
            soilReading = {soilReading}
            temp='Temp'
            tempReading={room_temp}
            humidity='Humidity'
            humidityReading = {soil_read}
          />
        </Text>
        <TouchableOpacity style={circleDisplayStyles.buttons} onPress={() => { console.warn("Add New Plant") }}>
          <Image
            style={{
              resizeMode: "contain",
              margin: 25,
              right: 10,
              bottom: 8,
              height: 30,
              width: 30
            }}
            source={require("../../assets/images/plusicon.webp")} />
        </TouchableOpacity>

      </View>
      
    </ScrollView>
  
  )
          }



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    height: 1000,
    width: 1000,
  },
  header: {
    fontSize: 30, 
    textAlign: 'center',
    marginTop: 100, 
    

  },
  text: {
  fontSize: 20,
  textAlign: 'center',
  marginTop: 20,
  }


});


export default PlantHubScreen