import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { Alert, Modal, Button, View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity }
  from 'react-native';
import Plant from '../../components/Plant/Plant';
import { circleDisplayStyles } from '../../components/Styles/Styling';
import React, { useEffect, useState } from 'react';
import { db, firebase } from '../../config';
import { ref, onValue } from "firebase/database";

const PlantHubScreen = () => {
  const [newPlantName, setNewPlantName] = useState('');
  const [name, setName] = useState('');
  const [plantData, setplantData] = useState([]);
  const [soil_read, setSoilRead] = useState(null);

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

  //create plant profile - update to modal?
  const newPlantPrompt = () => {

    Alert.prompt("Plant Profile", "Enter new plant name", [
      {
        text: "Add New Plant",
        onPress: (thisNewPlant) => setNewPlantName(thisNewPlant)
      },
      {
        text: "Cancel"
      }
    ]);
  }

  useEffect(() => {
    if (newPlantName === '') {
      console.log('Empty string');
    } else {
      addPlantProfile();
    }
  }, [newPlantName])


  //pull info from firestore database
  let addPlantProfile = () => {

    console.log(newPlantName);

    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('plant_profiles').add({
      plantName: newPlantName,


    })
  }


  useEffect(() => {
    const plantRef = ref(db, '/moistureSensor/')
    onValue(plantRef, (snapshot) => {
      const data = snapshot.val();
      const newReading = Object.keys(data).map((key) => ({
        data,
        ...data[key],
      }));
      const soil_read = newReading[0]['data']['moistureReading'];
      const room_temp = newReading[0]['data']['roomTemp'];
      console.log(soil_read);
      console.log(room_temp);
      setplantData(newReading);
      setSoilRead(soil_read);
    });
  }, [])

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





  function createPlant(plantName) {
    const name = plantName;
    const [soilLevel, setSoilLevel] = useState("soilReading");
    const [temp, setTemp] = useState("tempReading");
    const [humidity, setHumidity] = useState("humidityReading");
    <View style={circleDisplayStyles.container}>
      <Text style={circleDisplayStyles.headerText}>Plant </Text>
      <View style={circleDisplayStyles.CircleShape} />
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
            soilReading='Good'
            temp='Temp'
            tempReading={plantData[0]?.data?.roomTemp}
            humidity='Humidity'
            humidityReading={soil_read}
          />
        </Text>
        <TouchableOpacity style={circleDisplayStyles.buttons} onPress={() => newPlantPrompt()}>
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
    </ScrollView >
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 1000,
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