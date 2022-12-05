import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import React from 'react';
import { database } from '@react-native-firebase/database';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';

const db = database.database().ref('https://plant-link-5b48e-default-rtdb.firebaseio.com/');
export class PlantActions extends React.Component{
    constructor(){
    super();
    this.state = {
    tableData:[]
    }
 }
}

export const plantData = () =>{
//return (dispatch) => {
    //firebase.database().ref('https://plant-link-5b48e-default-rtdb.firebaseio.com/')
const dbRef = ref(db,'moisture-sensor')
.on(dbRef, snapshot => {
   let records = [];
   snapshot.forEach(childSnapshot=>{
    let keyName = childSnapshot.key;
    let data = childSnapshot.val();
    records.push({"key":keyName,"data":data})
   });
   this.setState({tableData: records})
  });
  console.log('User data: ', snapshot.val());
 }
//}

