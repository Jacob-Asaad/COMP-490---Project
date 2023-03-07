import { View, SafeAreaView, Text, Image, Switch, plantProfileStylesheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { plantProfileStyles, circleDisplayStyles } from '../../components/Styles/Styling';
import {CustomButton} from "../../components/CustomButton/Custombutton";
import { firebase , db } from '../../config';





const profileForm = ({ onClose }) => {
    const [plantName, setplantName] = useState('');
    const [Moisture, setMoisture] = useState('');
    const [Temperature, setTemperature] = useState('');

  
    const handleSubmit = () => {
      const data = {
        plantName,
        Moisture,
        Temperature,
        createdAt: new Date().toISOString(),
      };
  
      db.collection('plantProfiles').add(data)
        .then(() => {
          console.log('Data saved successfully!');
          setplantName('');
          setMoisture('');
          setTemperature('');
          onClose();
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    };
  
    return (
      <View>
        <Input
          label="Plant Name"
          value={plantName}
          onChangeText={setplantName}
        />
        <Input
          label="Moisture"
          value={Moisture}
          onChangeText={setMoisture}
        />
          <Input
          label="Temperature"
          value={Temperature}
          onChangeText={setTemperature}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  };

export default profileForm
  