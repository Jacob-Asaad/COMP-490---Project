import { View, SafeAreaView, Text, Image, Switch, plantProfileStylesheet, useWindowDimensions, ScrollView, FlatList, Modal  } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { plantProfileStyles } from '../../components/Styles/Styling';

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

const plant = ({ item }) => (
  <View style={plantProfileStyles.item}>
    <View style={plantProfileStyles.imageContainer}>
      <Image 
      source={item.image} style={plantProfileStyles.images}
      />
    </View>
    <View style={plantProfileStyles.titlecontainer}>
      <Text 
      style={plantProfileStyles.title}>{item.title}
      </Text>
    </View>
    <View style={plantProfileStyles.listcontainer}>
      <Text style={plantProfileStyles.text}>Type: {item.type}</Text>
      <Text style={plantProfileStyles.text}>Moisture: {item.moisture}</Text>
      <Text style={plantProfileStyles.text}>Temperature: {item.temperature}</Text>
    </View>
  </View>
);
const PlantProfileScreen = () => {

  return (
    <SafeAreaView style={plantProfileStyles.container}>
      <ScrollView>
        <FlatList
        data={Plants}
        renderItem={ plant }
        //ItemSeparatorComponent={listSeparator}
        />
      </ScrollView>
    </SafeAreaView>
  );
}


      

export default PlantProfileScreen