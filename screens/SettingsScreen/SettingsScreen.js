import { View,SafeAreaView, Text, Image, Switch, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { Header } from 'react-native/Libraries/NewAppScreen';


const SettingsScreen = () => {

    const [notifications, SetNotifications] = useState(false);
    const [bluetooth, SetBluetooth] = useState(false);
    const [autowater, SetAutowater] = useState(false);

    const toggleBluetooth = () => SetBluetooth(previousState => !previousState);
    const toggleAutowater = () => SetAutowater(previousState => !previousState);
    const toggleNotifications= () => SetNotifications(previousState => !previousState);

    const clearHistory = () => {
        console.warn("Clearing History...");
    }

    const editProfile = () => {
        console.warn("Editing Profile...");
    }

  return (
    <SafeAreaView style={styles.container}>

        <Text style = {styles.text}> 
         Notifications 
         </Text>

        <CustomSwitch 
         isEnabled = {notifications} 
         toggleSwitch = {SetNotifications}
         />

        <Text style = {styles.text}> 
         Bluetooth 
         </Text>
        
        <CustomSwitch 
         isEnabled = {bluetooth} 
         toggleSwitch = {SetBluetooth}
         />


        <Text style = {styles.text}> 
         Automatic Watering
         </Text>
    
        <CustomSwitch 
         isEnabled = {autowater} 
         toggleSwitch = {SetAutowater}
         />

        <CustomButton 
        text = "Clear History" 
        onPress={clearHistory}
        bgColor = "#FAE9EA"
        fgColor= "#DD4D44" 
        />

        <CustomButton 
        text = "Edit Profile " 
        onPress={editProfile}
        bgColor = "#E9F9FA"
        fgColor= "blue" 
        />


        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });

export default SettingsScreen