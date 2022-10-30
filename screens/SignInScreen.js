import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, {useState} from 'react';
import Logo from '../assets/images/logo.png';
import CustomInput from '../components/CustomInput/CustomInput';

const SignInScreen = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
        
    const {height} = useWindowDimensions();

     return(
    <View style = {styles.root}>
      <Image 
      source = {Logo} 
      style= {[styles.logo, {height: height * 0.3}] } 
      resizeMode= 'contain'
      />

      <CustomInput 
      placeholder = "Email" 
      value={email} 
      setValue = {setEmail} />

      <CustomInput 
      placeholder  = "Password" 
      value= {password} 
      setValue = {setPassword} />
    </View>
  );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        
    },

logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,

},
});



export default SignInScreen