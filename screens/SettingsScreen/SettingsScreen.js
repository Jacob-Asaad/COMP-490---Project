import { View, SafeAreaView, Text, Image, Switch, settingsStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { firebase } from '../../config';
import { settingsStyles } from '../../components/Styles/Styling';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../../theme/themeContext';

const SettingsScreen = ({navigation}) => {

  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);

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
    navigation.navigate('Settings', {screen: 'EditProfile'});
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
      <SafeAreaView style={[settingsStyles.container, {backgroundColor: theme.background}]}>
        <View style={settingsStyles.contain}>

        <Text style={[settingsStyles.settings, {color: theme.color}]}>
            Settings
          </Text>


          <View style={settingsStyles.profileImage}>

          

            <Image source={require('../../assets/images/profilepic.jpeg')} style={settingsStyles.image}>
            </Image>

          </View>


          <Text style={[settingsStyles.emailName, {color: theme.color}]}>
            {email.email}
          </Text>
            
          <View style={settingsStyles.rows}>
            <Text style={[settingsStyles.text, {color: theme.color}]}>
              Notifications
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled={notifications}
              toggleSwitch={SetNotifications}
            />

          </View>

          <View style={settingsStyles.rows}>
            <Text style={[settingsStyles.text, {color: theme.color}]}>
              Bluetooth
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled={bluetooth}
              toggleSwitch={SetBluetooth}
            />
          </View>

          <View style={settingsStyles.rows}>

            <Text style={[settingsStyles.text, {color: theme.color}]}>
              Automatic Watering
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled={autowater}
              toggleSwitch={SetAutowater}
            />

          </View>
          
          <View style={settingsStyles.rows}>
            <Text style={[settingsStyles.text, {color: theme.color}]}>
              Dark Mode
            </Text>

            <CustomSwitch style={settingsStyles.switch}
              isEnabled = {darkMode}
              toggleSwitch={(value) => {
                setDarkMode(value);
                EventRegister.emit('ChangeTheme', value)
                
              
              }}
              
              
            />
          </View>
          
          <CustomButton style={settingsStyles.button}
            text="Clear History"
            onPress={clearHistory}
            bgColor="#7DB9B6"
            fgColor="darkred"
          />

          <CustomButton
            text="Edit Profile "
            onPress={editProfile}
            bgColor="#7DB9B6"
            fgColor="#000000"
          />
          <CustomButton
            text="Log Out "
            onPress={logout}
            bgColor={theme.background}
            fgColor={theme.color}
            
          />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}




export default SettingsScreen
