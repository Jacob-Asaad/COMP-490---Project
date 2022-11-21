import { View, SafeAreaView, Text, Image, Switch, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
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
      
        <View style={styles.contain}>
        <View style={styles.profileImage}>
            <Image source={require('/Users/jose/Documents/GitHub/COMP-490---Project/COMP-490---Project/assets/images/profilepic.jpeg')} style={styles.image}></Image>

        </View>

        <Text style = {styles.emailName}> 
         Sample@email.com 
         </Text>

         <Text style = {styles.settings}> 
         Settings
         </Text>
  
        <Text style = {styles.text}> 
         Notifications 
         </Text>

        <CustomSwitch style = {styles.switch}>
         isEnabled = {notifications} 
         toggleSwitch = {SetNotifications}
        
        </CustomSwitch>

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
        bgColor = "#5A5A5A"
        fgColor= "#000000" 
        />

        <CustomButton 
        text = "Edit Profile " 
        onPress={editProfile}
        bgColor = "#5A5A5A"
        fgColor= "#000000" 
        />


        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#808080',

    },
    contain: {
        flex: 1,
        alignSelf: 'center',
        padding: 30,
        
    },

    image:{
       flex: 1,
       width: undefined,
       height: undefined,
       paddingTop: 10,
    },
    profileImage:{
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 50,
},
    text: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 20,
    },

    emailName: {
      alignItems: "center",
      alignSelf: "center",
      marginTop: 20,
  },
  settings: {
    alignItems: "center",
      alignSelf: "center",
      marginTop: 20,
      fontSize: 25,
      fontWeight: "bold",
  },
  switch: {
    alignItems: "right",
  },


});
      

export default SettingsScreen