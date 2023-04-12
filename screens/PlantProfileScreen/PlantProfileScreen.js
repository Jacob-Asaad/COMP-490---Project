import { View, SafeAreaView, Text, Image, Switch, plantProfileStylesheet, useWindowDimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React, {useContext, useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { plantProfileStyles, circleDisplayStyles } from '../../components/Styles/Styling';
import {CustomButton} from "../../components/CustomButton/Custombutton";
import { firebase } from '../../config';
import {profileForm } from './profileForm'
import themeContext from '../../theme/themeContext';



//will be plant info from firebase
const Plants = [
  {
    id: 1,
    title: 'Plant 1',
    image: require('../../assets/images/cactusplant.png'),
    type: 'Cactus',
    moisture: '0-20%',
    temperature: '40-80°F'
  },
  {
    id: 2,
    title: 'Plant 2',
    image: require('../../assets/images/caladium.png'),
    type: 'Caladium',
    moisture: '70-80%',
    temperature: '65-80°F'
  },
  {
    id: 3,
    title: 'Plant 3',
    image: require('../../assets/images/tulip.png'),
    type: 'Tulip',
    moisture: '21-60%',
    temperature: '55-70°F'
  }
];



const PlantProfileScreen = () => {

  const theme= useContext(themeContext);
  const [showForm, setShowForm] = useState(false);
  
    const handlePress = () => {
      setShowForm(true);
    };
  
    const handleClose = () => {
      setShowForm(false);
    };
    const plant = ({ item }) => (

  
      <View style={[plantProfileStyles.item,{backgroundColor: theme.background}]}>
        <View style={[plantProfileStyles.imageContainer, {backgroundColor: theme.background}]}>
          <Image 
          source={item.image} style={plantProfileStyles.images}
          />
        </View>
        <View style={plantProfileStyles.titlecontainer}>
          <Text 
          style={[plantProfileStyles.title,{color: theme.color}]}>{item.title}
          </Text>
        </View>
        <View style={[plantProfileStyles.listcontainer, {backgroundColor: theme.background}]}>
          <Text style={[plantProfileStyles.text, {color: theme.color}]}>Type: {item.type}</Text>
          <Text style={[plantProfileStyles.text, {color: theme.color}]}>Moisture: {item.moisture}</Text>
          <Text style={[plantProfileStyles.text, {color: theme.color}]}>Temperature: {item.temperature}</Text>
        </View>
      </View>
    );

  return (
    <SafeAreaView style={[plantProfileStyles.container,{backgroundColor: theme.background}]}>
       
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
        <Text style = {[plantProfileStyles.errorText,{color: theme.color}]}> 
         Plant Profiles 

         </Text>
         <FlatList
        data={Plants}
        renderItem={ plant }
        //ItemSeparatorComponent={listSeparator}
        />
         
    </SafeAreaView>
  );
}


      

export default PlantProfileScreen