import { View, Text, Image, signInStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { firebase } from '../../config';
import { signInStyles } from '../../components/Styles/Styling';


const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    const { height } = useWindowDimensions();

    const onSignInPress = () => {
        loginUser(email, password);
        console.warn("Sign In");
    }

    const onForgotPasswordPress = () => {
        console.warn("Forgot Password");
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

    const onSignUpPress = () => {
        console.warn('Redirect to Sign Up Screen');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={signInStyles.root}>
                <Image
                    source={Logo}
                    style={[signInStyles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
                />
                <Text
                    style={signInStyles.login}> Login
                </Text>

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign In"
                    onPress={onSignInPress}
                />

                <CustomButton
                    text="Forgot Password? "
                    onPress={onForgotPasswordPress}
                    type="TERTIARY"
                />

                <CustomButton
                    text="Sign In with Facebook"
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />

                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />

                <CustomButton
                    text="Sign In with Apple"
                    onPress={onSignInPressApple}
                    bgColor="#E3E3E3"
                    fgColor="#363636"
                />

                <CustomButton
                    text="Don't have an account? Sign Up "
                    onPress={onSignUpPress}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>
    );
};




export default SignInScreen