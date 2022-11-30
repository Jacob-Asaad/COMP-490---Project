import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import Plant from '../../components/Plant/Plant';
import React, {useState} from 'react';

const PlantHubScreen = () => {

    const createPlant = function(plantName) { //Work in Progress -> ignore for now
          const name = plantName;
          const [soilLevel, setSoilLevel] = useState("soilReading");
          const [temp, setTemp] = useState("tempReading");
          const [humidity, setHumidity] = useState("humidityReading");
        /*  <View style={circleDisplayStyles.container}>  
            <Text style={circleDisplayStyles.headerText}>Plant </Text>
            <View style={circleDisplayStyles.CircleShape}/>
          </View>
        */ 
    }
    return( //returning a plant component to the PlantHubScreen
        <ScrollView showsVerticalScrollIndicator = {false}>
          <View >
            <Text style = {circleDisplayStyles.plantText}> Plant 1 </Text>
            <Text>
              <Plant
                name ='Plant 1'
                soilLevel ='Soil Level'
                temp='Temp'
                humidity='Humidity'
              />
           </Text>
           <TouchableOpacity style={circleDisplayStyles.buttons} onPress={()=>{console.warn("Add New Plant")}}>
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
           source={require("../../assets/images/plusicon.webp")}/>
        </TouchableOpacity>

         </View>
       </ScrollView>
    );
};
    const circleDisplayStyles = StyleSheet.create({ //Styling to build a Circle
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        
      },
      plantText: {
      padding: 20,
      fontWeight: "bold",
      fontSize: 20,
      },
      headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
      }, 
      CircleShape: {
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        backgroundColor: '#588157',
      },
      buttons: {
        margin: 20,
       alignSelf: 'center',
        backgroundColor: "#577157",
        borderRadius: 100,
        height: 60,
        width: 60,
      }
    });



export default PlantHubScreen