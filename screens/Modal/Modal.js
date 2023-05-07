import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { firebase } from '../../config';
import { addPlantStyles } from '../../components/Styles/Styling';
import { useNavigation } from '@react-navigation/native';


const Modal = () => {
    const navigation = useNavigation();
    const [newPlantName, setplantName] = useState('');
    const [plantType, setplantType] = useState('');
    const [idealMoisture, setidealMoisture] = useState('');
    const [idealTemp, setIdealTemp] = useState('');


    const addPlant = () => {

        if (!newPlantName || !plantType || !idealMoisture || !idealTemp) {
            alert("Empty fields!");
        } else {
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('plant_profiles').add({
                plantName: newPlantName,
                plantType: plantType,
                idealMoisture: idealMoisture,
                idealTemp: idealTemp

            })

            navigation.pop()
        }
    }


    return (
        <ScrollView style={addPlantStyles.contain}>
            <View>
                <Text style={addPlantStyles.text}>
                    Enter new plant information:
                </Text>
                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Enter plant name:
                    </Text>

                    <CustomInput
                        textAlign='center'
                        placeholder="Plant name"
                        defaultValue={newPlantName}
                        setValue={setplantName}
                        style={{

                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Enter plant type:
                    </Text>
                    <CustomInput
                        textAlign='center'
                        placeholder="Flower, shrub..."
                        defaultValue={plantType}
                        setValue={setplantType}
                        style={{
                            align: "center",
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Ideal moisture:
                    </Text>
                    <CustomInput
                        textAlign='center'
                        placeholder="Percentage"
                        defaultValue={idealMoisture}
                        setValue={setidealMoisture}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Ideal temperature:
                    </Text>
                    <CustomInput
                        textAlign='center'
                        placeholder="Degrees"
                        defaultValue={idealTemp}
                        setValue={setIdealTemp}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
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
