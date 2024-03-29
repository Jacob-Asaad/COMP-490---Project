import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Custombutton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress}
     style = 
     {[styles.container, 
     styles [`container_${type}`],
     bgColor ? {backgroundColor: bgColor} : {}
     ]}>
      <Text
       style = {[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
        ]}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
 container: {
    width: '100%',
    padding: 15,
    marginTop: 6,
    marginVertical: 6.5,
     
    alignItems: 'center',
    borderRadius: 5,

 },
 text: {
    fontWeight: 'bold',
    color: 'white',
 },

 text_TERTIARY: {
    color: 'gray',

 },

 container_PRIMARY: {
    backgroundColor: '#32a852'

 },
  
 container_TERTIARY: {},


})



export default Custombutton