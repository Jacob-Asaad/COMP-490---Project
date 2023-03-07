import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { customInputStyles } from '../Styles/Styling'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {customInputStyles.container}>

      <TextInput
      value = {value}
      onChangeText = {setValue}
      placeholder = {placeholder}
      style = {[customInputStyles.input, {flex: 1}]}
      secureTextEntry = {secureTextEntry}
       />
    </View>
  );
};



export default CustomInput