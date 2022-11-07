import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container}>

      <TextInput
      value = {value}
      onChangeText = {setValue}
      placeholder = {placeholder}
      style = {styles.input}
      secureTextEntry = {secureTextEntry}
       />
    </View>
  );
};


const styles = StyleSheet.create({
container: {

backgroundColor: 'white',
width: '100%',
height: 45,
borderColor: "#e8e8e8",
borderWidth: 2,
borderRadius: 5,

alignItems: 'flex',
paddingHorizontal: 10,
marginVertical: 10,
},
input: {},
}

);
export default CustomInput