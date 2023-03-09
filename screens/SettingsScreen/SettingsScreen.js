import { View, SafeAreaView, Text, Image, Switch, settingsStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { firebase } from '../../config';
import { settingsStyles } from '../../components/Styles/Styling';


const SettingsScreen = () => {

  const [email, setEmail] = useState('')

  //pull info from firestore database
  useEffect(() => {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then((snapshot) => {
      if (snapshot.exists) {
        setEmail(snapshot.data());
      } else {
        console.log('user does not exist');
      }
    })
  }, [])

  const [notifications, SetNotifications] = useState(false);
  const [bluetooth, SetBluetooth] = useState(false);
  const [autowater, SetAutowater] = useState(false);

  const toggleBluetooth = () => SetBluetooth(previousState => !previousState);
  const toggleAutowater = () => SetAutowater(previousState => !previousState);
  const toggleNotifications = () => SetNotifications(previousState => !previousState);

  const clearHistory = () => {
    console.warn("Clearing History...");
  }

  const editProfile = () => {
    console.warn("Editing Profile...");
  }

  //logout function
  const logout = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
    console.warn("Logging Out...");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={settingsStyles.container}>
        <View style={settingsStyles.contain}>

        <Text style={settingsStyles.settings}>
            Settings
          </Text>


          <View style={settingsStyles.profileImage}>

          

            <Image source={require('../../assets/images/profilepic.jpeg')} style={settingsStyles.image}>
            </Image>

          </View>


          <Text style={settingsStyles.emailName}>
            {email.email}
          </Text>

          <View style={settingsStyles.rows}>
            <Text style={settingsStyles.text}>
              Notifications
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled={notifications}
              toggleSwitch={SetNotifications}
            />

          </View>

          <View style={settingsStyles.rows}>
            <Text style={settingsStyles.text}>
              Bluetooth
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled={bluetooth}
              toggleSwitch={SetBluetooth}
            />
          </View>

          <View style={settingsStyles.rows}>

            <Text style={settingsStyles.text}>
              Automatic Watering
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled={autowater}
              toggleSwitch={SetAutowater}
            />

          </View>
          <CustomButton style={settingsStyles.button}
            text="Clear History"
            onPress={clearHistory}
            bgColor="#8fbc8f"
            fgColor="darkred"
          />

          <CustomButton
            text="Edit Profile "
            onPress={editProfile}
            bgColor="#8fbc8f"
            fgColor="#000000"
          />
          <CustomButton
            text="Log Out "
            onPress={logout}
            bgColor="white"
            fgColor="#000000"
            
          />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}




export default SettingsScreen
