import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect, useState  } from 'react';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import PlantHubScreen from './screens/PlantHubScreen/PlantHubScreen';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from './config';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryLogScreen from './screens/HistoryLogScreen/HistoryLogScreen';
import PlantProfileScreen from './screens/PlantProfileScreen/PlantProfileScreen';
import { appStyles } from '././components/Styles/Styling';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //handleUserStateChanges
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  //if user not signed in, return login screen
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={SignInScreen}
        />
      </Stack.Navigator>
    );
  }


  //else return plant dashboard + navigation bar
  return (
    <Tab.Navigator
      //need to change this to screenOptions( but it's some options need to be changed)
      tabBarOptions={{
        showLabel: false,
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
          ...appStyles.shadow
        }
      }}
    >

      <Tab.Screen name="Dashboard" component={PlantHubScreen}
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
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Home</Text>

            </View>

          )
        }} />

      <Tab.Screen name="Plant Profiles" component={PlantProfileScreen}
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
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Profiles</Text>

            </View>

          )
        }} />

      <Tab.Screen name="Watering History" component={HistoryLogScreen}
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
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> History</Text>

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
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}> Settings</Text>

            </View>

          )
        }} />

    </Tab.Navigator>
  );
}





export default () => {
  return (
    
    <NavigationContainer>
      <App />
    </NavigationContainer>
    
  )
};