import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Plant from '../../components/Plant/Plant';
import React, {useState} from 'react';



const PlantHubScreen = () => {

    const createPlant = function(plantName) {
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
    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
          <View>
            <Text>
              <Plant             
                name ='plantOne'
                soilLevel ='soil'
                temp='temp'
                humidity='humidity'
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
        backgroundColor: "white",
      },
      headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
      }, 
      CircleShape: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#FF9800',
      },
    });
export default PlantHubScreen