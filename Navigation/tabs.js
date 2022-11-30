import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FloatingActionBar from 'react-native-floating-action-bar';
import PlantHubScreen from '../screens/PlantHubScreen/PlantHubScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import HistoryLogScreen from '../screens/HistoryLogScreen/HistoryLogScreen';
import PlantProfileScreen from '../screens/PlantProfileScreen/PlantProfileScreen';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';


// create bottom tab 
const Tab = createBottomTabNavigator();


// custom tab bar button (big red plus button)
const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
    //styling for red plus button positioning
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress={onPress}
    >
        <View style={{
            //styling for button size and color
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#E32F45'
        }}>
            {children}
        </View>

    </TouchableOpacity>
);
// Options for the navigation bar
const Tabs = () => {
return(
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
          ...styles.shadow
        }
        }}
        > 
        
        <Tab.Screen name="Dashboard" component={PlantHubScreen} 
        //styling and options for Home button on navigation bar
        options={{
         tabBarIcon: ({focused}) => (
            <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                <Image
                source={require('../assets/images/homeicon.png')}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                }}
                // Text under home button 
                />    
                <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Home</Text>

            </View>

         )
        }}/>
        
        <Tab.Screen name= "Plant Profiles" component = {PlantProfileScreen}
        //styling and options for Plant Profiles button on navigation bar
        options={{
            tabBarIcon: ({focused}) => (
               <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                   <Image
                   source={require('../assets/images/profileicon.png')}
                   resizeMode="contain"
                   style={{
                       width: 25,
                       height: 25,
                       tintColor: focused ? '#e32f45' : '#748c94'
                   }}
                     // Text under Plant Profiles button
                   />   
                   <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Profiles</Text>
   
               </View>
   
            )
           }}/>  
           
           <Tab.Screen name= "Watering History" component = {HistoryLogScreen}
           //styling and options for Watering History button on navigation bar
        options={{
            tabBarIcon: ({focused}) => (
               <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                   <Image
                   source={require('../assets/images/clockicon.webp')}
                   resizeMode="contain"
                   style={{
                       width: 25,
                       height: 25,
                       tintColor: focused ? '#e32f45' : '#748c94'
                   }}
                        // Text under Watering History button
                   />   
                   <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> History</Text>
   
               </View>
   
            )
           }}/>
           <Tab.Screen name= "Settings" component = {SettingsScreen}
              //styling and options for Settings button on navigation bar
        options={{
            tabBarIcon: ({focused}) => (
               <View style = {{alignItems: 'center', justifyContent: 'center', top: 3}}>
                   <Image
                   source={require('../assets/images/settingsicon.webp')}
                   resizeMode="contain"
                   style={{
                       width: 25,
                       height: 25,
                       tintColor: focused ? '#e32f45' : '#748c94'
                   }}
                        // Text under Settings button
                   />   
                   <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Settings</Text>
   
               </View>
   
            )
           }}/>
        
    </Tab.Navigator>
);
}
// Stylesheet for shadow under plus button
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


export default Tabs;