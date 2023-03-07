import { View, SafeAreaView, Text, Image, Switch, plantProfileStylesheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { plantProfileStyles, circleDisplayStyles } from '../../components/Styles/Styling';
import {CustomButton} from "../../components/CustomButton/Custombutton";
import { firebase } from '../../config';
import {profileForm } from './profileForm'



const PlantProfileScreen = () => {

  const [showForm, setShowForm] = useState(false);
  
    const handlePress = () => {
      setShowForm(true);
    };
  
    const handleClose = () => {
      setShowForm(false);
    };
  

  return (
    <SafeAreaView style={plantProfileStyles.container}>
       
          <TouchableOpacity style={circleDisplayStyles.buttons} onPress={() => { handlePress }}>
          {showForm && <profileForm onClose={handleClose} />}
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
        <Text style = {plantProfileStyles.errorText}> 
         Plant Profiles 

         </Text>

         
    </SafeAreaView>
  );
}


      

export default PlantProfileScreen