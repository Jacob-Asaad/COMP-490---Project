import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
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
                name ='plantOne'
                soilLevel ='Soil Level'
                temp='Temp'
                humidity='Humidity'
              />
           </Text>
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
      plantText:{
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
        backgroundColor: '#FF9800',
      },
    });



export default PlantHubScreen