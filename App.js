import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import PlantHubScreen from './screens/PlantHubScreen/PlantHubScreen';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './config';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryLogScreen from './screens/HistoryLogScreen/HistoryLogScreen';
import PlantProfileScreen from './screens/PlantProfileScreen/PlantProfileScreen';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

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



  //handleUserStateChanges
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    return subscriber;

    }
  }, []);

  if (initializing) return null;

  //if user not signed in, return login screen
  if (!user) {
    return (
      <Stack.Navigator
      
      
      >
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
      <Tab.Screen name="Settings" component={SettingsScreen}
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

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
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
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}



export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
};