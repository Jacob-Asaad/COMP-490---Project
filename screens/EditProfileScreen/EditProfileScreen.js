import { View, SafeAreaView, Text, TextInput, Image, Switch, editProfileStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { editProfileStyles } from '../../components/Styles/Styling';

import { useNavigation } from '@react-navigation/native';


const EditProfileScreen = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const saveChanges = () => {
        console.warn("Saving Changes...");
    }
    const cancel = () => {
        console.warn("canceling changes...");
    }

    return (
        <SafeAreaView style={editProfileStyles.container}>
            <View style={editProfileStyles.contain}>
                <View style={editProfileStyles.profileImage}>
                    <Image source={require('../../assets/images/profilepic.jpeg')} style={editProfileStyles.image}>

                    </Image>
                </View>

                <Text style={styles.editPic}>
                    edit photo
                </Text>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        First Name
                    </Text>
                    <TextInput
                        placeholder="first name"
                        defaultValue={firstName}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Last Name
                    </Text>
                    <TextInput
                        placeholder="last name"
                        defaultValue={lastName}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Email
                    </Text>
                    <TextInput
                        placeholder="email"
                        defaultValue={email}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="new password"
                        defaultValue={password}
                        style={{
                            fontsize: 16,
                            borderBottomWidth: 1,
                            borderColor: '#CDCDCD',
                        }}
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <CustomButton
                        text="Save Changes "
                        onPress={saveChanges}
                        bgColor="#8fbc8f"
                        fgColor="#000000"
                    />
                </View>

                <View style={{ padding: 10 }}>
                    <CustomButton
                        text="Cancel "
                        onPress={() => navigation.navigate('Settings')}
                        bgColor="#FFFFFF"
                        fgColor="crimson"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    contain: {
        flex: 1,
        alignContent: 'center',
        margin: 25,
        padding: 20,

    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 100,
        paddingTop: 10,
    },
    profileImage: {
        alignSelf: 'center',
        width: 80,
        height: 80,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 50,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 20,
        marginRight: 145,
        marginBottom: 5,
    },

    editPic: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
        fontSize: 15,
        color: 'green',
    },
    buttons: {
        align: "center",
    }



export default EditProfileScreen;