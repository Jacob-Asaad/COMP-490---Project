import { View, SafeAreaView, Text, Image, Switch, plantProfileStylesheet, useWindowDimensions, ScrollView, FlatList, Modal  } from 'react-native';
import React, {useState} from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { plantProfileStyles } from '../../components/Styles/Styling';

const Plants = [
  {
    id: 1,
    title: 'Plant 1',
    image: require('../../assets/images/plantlinkicon.png'),
    moisture: '30%',
    temperature: '75°F'
  },
  {
    id: 2,
    title: 'Plant 2',
    image: require('../../assets/images/plantlinkicon.png'),
    moisture: '40%',
    temperature: '70°F'
  },
  {
    id: 3,
    title: 'Plant 3',
    image: require('../../assets/images/plantlinkicon.png'),
    moisture: '50%',
    temperature: '65°F'
  }
];

const plant = ({ item }) => (
  <View style={plantProfileStyles.item}>
    <View style={plantProfileStyles.imageContainer}>
      <Image 
      source={item.image} style={plantProfileStyles.images}
      />
    </View>
    <Text 
    style={plantProfileStyles.title}>{item.title}
    </Text>
    <View style={plantProfileStyles.listcontainer}>
      <Text style={plantProfileStyles.text}>Moisture: {item.moisture}</Text>
      <Text style={plantProfileStyles.text}>Temperature: {item.temperature}</Text>
    </View>
  </View>
);
const listSeparator = () => {
  return <View style={plantProfileStyles.separator} />
}

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