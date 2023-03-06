import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity }
  from 'react-native';
import Plant from '../../components/Plant/Plant';
import React, { useEffect, useState } from 'react';
import { db, firebase } from '../../config';
import { circleDisplayStyles } from '../../components/Styles/Styling';
import {ref, onValue} from "firebase/database";

const PlantHubScreen = () => {
  const [name, setName] = useState('');
  const [plantData, setplantData] = useState([]);

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


let moist;
let soil_read;
let room_temp;
useEffect(() => {
  const plantRef = ref(db, '/moistureSensor')
   onValue(plantRef, (snapshot) => {
     const data = snapshot.val();
     const newReading = Object.keys(data).map((key) => ({
       data,
       ...data[key]
     }));
     console.log(newReading);
     moist = newReading;
     soil_read = moist[0]['data']['moistureReading'];
     room_temp = moist[0]['data']['roomTemp'];
     console.log(moist[0]['data']['moistureReading'])
     console.log(moist[0]['data']['roomTemp'])
     setplantData(newReading);
   });
 }, [])


   return (
<View styles={styles.container}>
 <Text style={styles.header}>  Hi</Text>
 {
  //  plantData.map((item, index) => {
  //    return(
  //      <View key={index}>
         
  //        <Text style={styles.text}> {index[item]}Moisture Sensor: </Text>
  //      </View>
  //    )
  //  })
  <Text>Moisture Data: {soil_read}</Text>
 }
   </View>

   )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
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
})



 // old cold that was used to create a plant component
 /*
  function createPlant(plantName) {
    const name = plantName;
    const [soilLevel, setSoilLevel] = useState("soilReading");
    const [temp, setTemp] = useState("tempReading");
    const [humidity, setHumidity] = useState("humidityReading");
    /*  <View style={circleDisplayStyles.container}>
        <Text style={circleDisplayStyles.headerText}>Plant </Text>
        <View style={circleDisplayStyles.CircleShape}/>
      </View>
    
  };

  return ( //returning a plant component to the PlantHubScreen Hello {name.firsName}
    <ScrollView showsVerticalScrollIndicator={false}>
      <View >
        <Text style={circleDisplayStyles.plantText}> Hello, {name.firstName}! </Text>
        <Text>
          <Plant
            name='Plant 1'
            soilLevel='Soil Level'
            temp='Temp'
            humidity='Humidity'
          />
        </Text>
        <TouchableOpacity style={circleDisplayStyles.buttons} onPress={() => { console.warn("Add New Plant") }}>
          <Image
            style={{
              resizeMode: "contain",
              margin: 25,
              right: 10,
              bottom: 8,
              alignItems: 'center',
              height: 30,
              width: 30
            }}
            source={require("../../assets/images/plusicon.webp")} />
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}
*/





export default PlantHubScreen