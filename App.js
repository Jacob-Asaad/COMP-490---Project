import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import EditProfileScreen from './screens/EditProfileScreen/EditProfileScreen';
import PlantHubScreen from './screens/PlantHubScreen/PlantHubScreen';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { firebase, db, auth, fire } from './config';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryLogScreen from './screens/HistoryLogScreen/HistoryLogScreen';
import PlantProfileScreen from './screens/PlantProfileScreen/PlantProfileScreen';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { updatePushToken, getUserByEmail } from "./firebaseUtils";
import { EventRegister } from 'react-native-event-listeners';
import theme from './theme/theme';
import themeContext from './theme/themeContext';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  
  useEffect(() => {
    const getPushToken = async () => {
      try {
        const { data: pushToken } = await Notifications.getExpoPushTokenAsync();
        console.log('Push Token: ', pushToken); // log push token
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user) {
            const email = user.email;
            const userRef = fire.collection('users').where('email', '==', email);
            const querySnapshot = await userRef.get();
            if (querySnapshot.empty) {
              console.log('No matching documents.');
              return;
            }
            const uid = querySnapshot.docs[0].id;
            console.log('User UID: ', uid);
            await updatePushToken(uid, pushToken);
          }
        });
  
        return () => unsubscribe();
      } catch (error) {
        console.log('Error getting push token: ', error);
      }
    };
    
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        getPushToken();
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  if (initializing) return null;

  //if user not signed in, return login screen
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={SignInScreen}
          screenOptions={{
            showLabel: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }


  //else return plant dashboard + navigation bar
  return (
    <Tab.Navigator
      //need to change this to screenOptions( but it's some options need to be changed)
      screenOptions={{
        showLabel: false,
        headerShown: false,
        //styling for the navigation bar positioning
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 35,
          height: 100,
          ...styles.shadow
        }
      }}
    >

      <Tab.Screen name="Home" component={PlantHubScreen}
        //styling and options for Home button on navigation bar
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
              <Image
                source={require('./assets/images/homeicon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              // Text under home button 
              />
            

            </View>

          )
        }} />

      <Tab.Screen name="Profiles" component={PlantProfileScreen}
        //styling and options for Plant Profiles button on navigation bar
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
              <Image
                source={require('./assets/images/profileicon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              // Text under Plant Profiles button
              />
              

            </View>

          )
        }} />

      <Tab.Screen name="History" component={HistoryLogScreen}
        //styling and options for Watering History button on navigation bar
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
              <Image
                source={require('./assets/images/clockicon.webp')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              // Text under Watering History button
              />
              

            </View>

          )
        }} />
      <Tab.Screen name="Settings" component={SettingsStackScreen}
        //styling and options for Settings button on navigation bar
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
              <Image
                source={require('./assets/images/settingsicon.webp')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              // Text under Settings button
              />
              

            </View>

          )
        }} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const SettingsStack = createStackNavigator();
function SettingsStackScreen()
{
  return (
    <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
      showLabel: false,
    }}
    >
      <SettingsStack.Screen name="Setting" component={SettingsScreen} />
      <SettingsStack.Screen name="EditProfile" component={EditProfileScreen} />
    </SettingsStack.Navigator>
  );

}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'ios') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
    firebase.database().ref(`users/${user.uid}`).set(token);
        setExpoPushToken(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

export default () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
    })
    return () => {
      EventRegister.removeEventListener(listener);
    }
  }, [darkMode])

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme = {darkMode === true ? DarkTheme : DefaultTheme}>
        <App />
      </NavigationContainer>
    </themeContext.Provider>
  )
};