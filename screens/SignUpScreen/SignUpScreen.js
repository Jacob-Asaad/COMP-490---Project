import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';

const SignUpScreen = () => {
    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');
    const[repeatPassword, setRepeatPassword] = useState('');        
    const {height} = useWindowDimensions();

    const onRegisterPress = () => {
        console.warn("Sign Up");
    }

    const onSignInFacebook = () => {
        console.warn("Signing in with Facebook...");
    }

    const onSignInGoogle = () => {
        console.warn("Signing with Google...");
    }
    const onSignInPressApple = () => {
        console.warn("Signing with Apple...");
    }

    const onSignInPress = () => {
        console.warn('Redirect to Sign In Screen');
    }

     return(
        <ScrollView showsVerticalScrollIndicator = {false}>
    <View style = {styles.root}>
      <Image 
      source = {Logo} 
      style= {[styles.logo, {height: height * 0.3}] } 
      resizeMode= 'contain'
      />
      <Text 
      style = {styles.title}> Sign Up 
      </Text>

      <CustomInput 
      placeholder = "Email" 
      value={email} 
      setValue = {setEmail}
      secureTextEntry = {false}
       />

      <CustomInput 
      placeholder  = "Password" 
      value= {password} 
      setValue = {setPassword}
      secureTextEntry = {true}
        />

<CustomInput 
      placeholder  = " Repeat Password" 
      value= {repeatPassword} 
      setValue = {setRepeatPassword}
      secureTextEntry = {true}
        />

        <CustomButton 
        text = "Register" 
        onPress={onRegisterPress} 
        />

        <Text style = {styles.registerText}>
        By registering, you agree to accept our Terms of Use and Privacy Policy.
        </Text> 

       <CustomButton 
        text = "Sign In with Facebook" 
        onPress={onSignInFacebook} 
        bgColor ="#E7EAF4"
        fgColor="#4765A9"
        />

        <CustomButton 
        text = "Sign In with Google" 
        onPress={onSignInGoogle}
        bgColor = "#FAE9EA"
        fgColor= "#DD4D44" 
        />

        <CustomButton 
        text = "Sign In with Apple" 
        onPress={onSignInPressApple} 
        bgColor = "#E3E3E3"
        fgColor= "#363636"
        />

<CustomButton 
        text = "Already have an account? Sign In " 
        onPress={onSignInPress}
        type = "TERTIARY" 
        />

    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        
    },

    title: {
        fontSize: '20',
        fontWeight: 'bold',
        alignSelf: 'left',
        paddingBottom: '2%',
        letterSpacing: '1.2',
        
    },
    registerText: {
        color: 'gray',
        marginVertical: 5,

    },

logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,

},
});



export default SignUpScreen;