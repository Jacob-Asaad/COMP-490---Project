//import firebase from 'firebase/compat/app'
import React, {Component} from 'react';
//import firebase  from '@react-native-firebase/database';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useState } from 'react';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';

// Using class based components
export default class PlantActions extends Component{
    constructor(props){
    super(props);
    this.state = {
    moisture:0.0,
    };
 }
 //  const reference = firebase().ref('/2-push');
 //   .ref('Moisture Reading')

    componentDidMount () {
     firebase.app().database('https://plant-link-5b48e-default-rtdb.firebaseio.com/')
     .ref('/mositure-sensor/2-push/-NHs_x63CCvWY3M_ii7a/Moisture Reading')
     .on('value', snapshot => {

        console.log('plant data: ', snapshot.val());

        this.setState({
            moisture: snapshot.val(),
        });
        
   });

    return(
            <View>
                <TextInput>{this.state.moisture}</TextInput>
            </View>
    );
    }
    
};







/* Using Functional Components

const PlantActions = () =>{
    {
        const [data, setData] = useState("");
     const reference = firebase.app().database('https://plant-link-5b48e-default-rtdb.firebaseio.com/').ref('/moisture-sensor/2-push');
      //  const reference = firebase().ref('/2-push');
        reference.on('value', snapshot => {
            console.log('plant data: ', snapshot.val());
            setData({
                data: snapshot.val(),
            });
        });
    };
    
    return (
        <View>
          <Text>{data}</Text>  
        </View>
    );
};


export default PlantActions
*/


