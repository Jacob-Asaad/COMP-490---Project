import { View, SafeAreaView, Text, Image, Switch, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { firebase } from '../../config';


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

  const logout = () => {
    console.warn("Logging Out...");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contain}>
          <View style={styles.profileImage}>

            <Image source={require('../../assets/images/profilepic.jpeg')} style={styles.image}>
            </Image>

          </View>

          <Text style={styles.emailName}>
            {email.email}
          </Text>

          <Text style={styles.settings}>
            Settings
          </Text>

          <View style={styles.rows}>
            <Text style={styles.text}>
              Notifications
            </Text>

            <CustomSwitch style={styles.switch}
              isEnabled={notifications}
              toggleSwitch={SetNotifications}
            />

          </View>

          <View style={styles.rows}>
            <Text style={styles.text}>
              Bluetooth
            </Text>

            <CustomSwitch style={styles.switch}
              isEnabled={bluetooth}
              toggleSwitch={SetBluetooth}
            />
          </View>

          <View style={styles.rows}>

            <Text style={styles.text}>
              Automatic Watering
            </Text>

            <CustomSwitch style={styles.switch}
              isEnabled={autowater}
              toggleSwitch={SetAutowater}
            />

          </View>
          <CustomButton style={styles.button}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
  contain: {
    flex: 1,
    alignContent: 'center',
    margin: 25,
    padding: 20,

  },
  rows: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 2,
    justifyContent: 'space-between',
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    paddingTop: 10,
  },
  profileImage: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
    marginRight: 145,
    marginBottom: 5,
  },

  emailName: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    fontSize: 15,
  },
  settings: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  switch: {
    flex: 1,
    alignSelf: "right",

  },
  buttons: {
    align: "center",
  }


});


export default SettingsScreen
