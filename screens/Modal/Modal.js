import { View, Text, ScrollView } from 'react-native';
import  {Picker}  from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { firebase } from '../../config';
import { addPlantStyles } from '../../components/Styles/Styling';
import { useNavigation } from '@react-navigation/native';

const Modal = () => {
  const navigation = useNavigation();
  const [newPlantName, setPlantName] = useState('');
  const [userPlantDisplay, setUserPlantDisplay] = useState('');
  const [plantType, setPlantType] = useState(null);
  const [userPlantType, setUserPlantType] = useState('');
  const [idealMoisture, setIdealMoisture] = useState('');
  const [idealTemp, setIdealTemp] = useState('');

//get list of plants in plant-profiles-test for dropdown
  useEffect(() => {
    const fetchPlantInfo = async () => {
      const snapshot = await firebase.firestore().collection('plant-profiles-test').get();
      const plantNames = snapshot.docs.map((doc) => doc.data().name);
      setPlantType(plantNames);
      

    };
    fetchPlantInfo(); 
  }, []);


    //update ideal moisture & ideal temp to match user plant selection
    useEffect(() => {
        const fetchPlantInfo = async () => {
        
        if (typeof userPlantType == "undefined"){
            setIdealMoisture(0);
            setIdealTemp(0);
        }
        else {
            const snapshot = await firebase.firestore().collection('plant-profiles-test').where('name', '==', userPlantType).get();
            const plantInfo = snapshot.docs.map(doc => doc.data());
            if (plantInfo.length > 0) {
                setIdealMoisture(plantInfo[0].moisture);
                setIdealTemp(plantInfo[0].temperature);
            }
          }
        };
        fetchPlantInfo();
      }, [userPlantType]);


  const addPlant = () => {
    if (!newPlantName || !userPlantType || !idealMoisture || !idealTemp || typeof userPlantType == "undefined") {
      alert('Empty fields!');
    } else {
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .collection('plant_profiles')
        .add({
          plantName: newPlantName,
          plantType: userPlantType,
          idealMoisture: idealMoisture,
          idealTemp: idealTemp,
        });

      navigation.pop();
    }
  };

  return (
    <ScrollView style={addPlantStyles.contain}>
      <View>
        <Text style={addPlantStyles.text}>Enter new plant information:</Text>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Enter plant name:
          </Text>

          <CustomInput
            textAlign="center"
            placeholder="Plant name"
            defaultValue={newPlantName}
            setValue={setPlantName}
            style={{
              fontsize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>

        <View style={{ padding: -20}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Select plant type:
          </Text>

          <Picker
            selectedValue={userPlantDisplay}
            onValueChange={(itemValue, itemIndex) => {
                setUserPlantType(plantType[itemIndex-1]);
                setUserPlantDisplay(itemValue);

            }}
            style={{ height: -10 }}
            >
            <Picker.Item label="Select a plant type..." value={""} />
            {plantType && plantType.map((plant) => (
                <Picker.Item label={plant} value={plant} key={plant} />
            ))}
            </Picker>
        </View>


        <View style={{ padding: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Ideal moisture: {idealMoisture}
          </Text>
        </View>

        <View style={{ padding: 10 }}>
            <Text
                style={{
                    opacity: 0.5,
                        }}>
                    Ideal temperature: {idealTemp}
            </Text>
        </View>

        <View style={{ padding: 10 }}>
            <CustomButton
                text="Add Plant Profile"
                onPress={addPlant}
                bgColor="#8fbc8f"
               fgColor="#000000"
            />
        </View>

                <View style={{ padding: 10 }}>
                    <CustomButton
                        text="Cancel "
                        onPress={() => navigation.navigate('Home')}
                        bgColor="#FFFFFF"
                        fgColor="crimson"
                    />

                </View>
            </View>
        </ScrollView>
    );

}


export default Modal

