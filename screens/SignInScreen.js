import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, {useState} from 'react';
import Logo from '../assets/images/logo.png';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/Custombutton';

const SignInScreen = () => {
    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');
        
    const {height} = useWindowDimensions();

    const onSignInPress = () => {
        console.warn("Sign In)");
    }

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
      setValue = {setPassword}
      secureTextEntry = {true}
        />

        <CustomButton text = "Sign In" onPress={onSignInPress} />

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