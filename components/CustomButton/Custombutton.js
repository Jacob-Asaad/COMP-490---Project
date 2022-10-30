import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Custombutton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style = {[styles.container, styles [`container_${type}`]]}>
      <Text style = {[styles.text, styles[`text_${type}`]]}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
 container: {
  
    
    width: '100%',

    padding: 15,
    marginVertical: 5,

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