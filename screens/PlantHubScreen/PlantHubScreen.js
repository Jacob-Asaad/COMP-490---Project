import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';



const PlantHubScreen = () => {

    function createPlant () { //function to create a plant that outputs: soilLevel, temperature, & humidity
        const [soilLevel, setSoilLevel] = useState("");
        const [temp, setTemp] = useState("");
        const [humidity, setHumidity] = useState("");
    }

    var hello = displayTri();
    return(
        <ScrollView showsVerticalScrollIndicator = {false}>
            <Menu>hello</Menu>
        </ScrollView>
    );
};

/*
<View style={circleDisplayStyles.container}>
        <Text style={circleDisplayStyles.headerText}> Plant </Text>
        <View style={circleDisplayStyles.CircleShape} />
        </View>
 */

const displayTri=()=>{
   
    return(
        <div>
        <p>
            Hello
        </p>
        </div>

    );
};

const circleDisplayStyles = StyleSheet.create({
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



