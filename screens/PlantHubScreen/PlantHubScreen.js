import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import Plant from '../../components/Plant/Plant';
import React, {useEffect, useState} from 'react';
//import { firebase } from '../../config';
import { firebase } from '@react-native-firebase/database';
const PlantHubScreen = () => {

    const plantData = () => { 
      const database = firebase.app().database('https://plant-link-5b48e-default-rtdb.firebaseio.com/mositure-sensor');
      database.ref();
      const [data, setData] = useState(0.0);
      database()
      .ref('/mositure-sensor/2-push/-NHs_x63CCvWY3M_ii7a/Moisture Reading')
      .on('value', snapshot => {
        setData({
          data: snapshot.val(),
      });
        console.log('User data: ', snapshot.val());
      });
      return (
        <View>
          <Text>{data}</Text>  
        </View>
    );
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
           <View>
           <plantData/>
          </View>
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