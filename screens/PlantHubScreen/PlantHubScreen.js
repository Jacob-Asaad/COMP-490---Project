import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import Plant from '../../components/Plant/Plant';
import React, {useEffect, useState} from 'react';
import { firebase } from '../../config';
import {
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';
import { db } from '../../config';
///////////////////

const plantD = ({plantInfo: {title, done}, id}) => {
  const [doneState, setDone] = useState(done);

  const onCheck = (isChecked) => {
    setDone(isChecked);
    update(ref(db, '/mositure-sensor/2-push'), {
      [id]: {
        title,
        done: !doneState,
      },
    });
  };
  return (
    <View style={styles.todoItem}>
      <CheckBox
        onValueChange={onCheck}
        value={doneState}
      />
      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
        {title}
      </Text>
    </View>
  );
};

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12
  },
  contentContainerStyle: {
    padding: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#afafaf',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontSize: 20,
  },
  todoItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  todoText: {
    paddingHorizontal: 5,
    fontSize: 16
  },
});

/*----------------------------------------------------------------------------------------------------*/
const PlantHubScreen = () => {
  const [plantData, setPlantData] = useState(0.0);
  const plantDataKeys = Object.keys(plantData);

 /*const plantData = () => { 
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
  */
  useEffect(() => {
    return onValue(ref(db, '/mositure-sensor/2-push'), querySnapShot => {
      let data = querySnapShot.val() || {};
      let plantD = {...data};
      setPlantData(plantD);
    });
  }, []);

return (
        <ScrollView showsVerticalScrollIndicator = {false}>
          
          <View>
        {plantDataKeys.length > 0 ? (
          plantDataKeys.map(key => (
            <plantD
              key={key}
              id={key}
              plantInfo={plantData[key]}
            />
          ))
        ) : (
          <Text>No Plant Data</Text>
        )}
      </View>
      
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