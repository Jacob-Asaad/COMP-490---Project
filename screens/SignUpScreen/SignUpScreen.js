import { View, Text, Image, signUpStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import { firebase } from '../../config';
import { signUpStyles } from '../../components/Styles/Styling';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [repeatPassword, setRepeatPassword] = useState('');
    const { height } = useWindowDimensions();

    registerUser = async (email, password) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: "http://plant-link-5b48e.firebaseapp.com",
            }).then(() => {
                alert('Verification email sent')
            }).catch((error) => {
                alert(error.message)
            })
                .then(() => {
                    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                        firstName,
                        lastName,
                        email,

                    })
                })
                .catch((error) => {
                    alert(error.message)
                })
        })
    }

    const navigation = useNavigation();

    const onRegisterPress = () => {
        registerUser(email, password);
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
        navigation.navigate('Login');
        console.warn('Redirect to Sign In Screen');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={signUpStyles.root}>
                <Image
                    source={Logo}
                    style={[signUpStyles.logo, { height: height * 0.3 }]}
                    resizeMode='contain'
                />
                <Text
                    style={signUpStyles.title}> Sign Up
                </Text>

                <CustomInput
                    placeholder="First name"
                    value={firstName}
                    setValue={setFirstName}
                    secureTextEntry={false}
                />

                <CustomInput
                    placeholder="Last name"
                    value={lastName}
                    setValue={setLastName}
                    secureTextEntry={false}
                />

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
                    text="Register"
                    onPress={() => registerUser(email, password,)}
                />

                <Text style={signUpStyles.registerText}>
                    By registering, you agree to accept our Terms of Use and Privacy Policy.
                </Text>

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
                    text="Already have an account? Sign In "
                    onPress={onSignInPress}
                    type="TERTIARY"
                />

            </View>
        </ScrollView>
    );
};




export default SignUpScreen;