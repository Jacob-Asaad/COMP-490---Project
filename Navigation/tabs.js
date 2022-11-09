import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PlantHubScreen from '../screens/PlantHubScreen/PlantHubScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
return(
    <Tab.Navigator 
    tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
        }}
        > 
        <Tab.Screen name="Home" component={SignInScreen} options={{
         tabBarIcon: ({focused}) => (
            <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                }}

                />   
                <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Home</Text>

            </View>

         )
        }}/>
        <Tab.Screen name= "Profiles" component = {SignUpScreen} />
        
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


export default Tabs;