import { View, SafeAreaView, Text,TextInput, Image, Switch, editProfileStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState, useContext} from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { editProfileStyles } from '../../components/Styles/Styling';
import { db, firebase, auth } from '../../config';
import themeContext from '../../theme/themeContext';


const EditProfileScreen = ({navigation}) => {
    const theme = useContext(themeContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    const saveChanges = () => {
        updateUserProfile();
    }
    const cancel = () => {
        navigation.goBack();
    }

    const updateUserProfile = () => {
        const profileUpdates = {};
        
        if (firstName) {
            profileUpdates.firstName = firstName;
        }
        
        if (lastName) {
            profileUpdates.lastName = lastName;
        }
        
        if (email && email !== currentUser.email) {
            profileUpdates.email = email;
        }
        
        if (password && confirmPassword && password === confirmPassword) {
            currentUser.updatePassword(password)
                .then(() => console.log('Password updated'))
                .catch((error) => console.log('Error updating password:', error));
        }
        
        if (Object.keys(profileUpdates).length > 0) {
            updateCurrentUser(profileUpdates)
                .then(() => console.log('Profile updated'))
                .catch((error) => console.log('Error updating profile:', error));
        }
    };

    return (
        <SafeAreaView style={[editProfileStyles.container, {backgroundColor: theme.background}]}>
            <View style={editProfileStyles.contain}>
                <Text style= {[editProfileStyles.headerText, {backgroundColor: theme.background}]}> Edit Profile</Text>
                <View style={editProfileStyles.profileImage}>
                    <Image source={require('../../assets/images/profilepic.jpeg')} style={editProfileStyles.image}>

                    </Image>
                </View>

                <Text style = {[editProfileStyles.editPic, {color: '#7DB9B6'}]}>
                 Edit Photo
                </Text>
        
                <View style= {{padding: 10}}>
                     <Text
                        style = {{color: '#7DB9B6'
                        }}>
                        First Name
                    </Text>
                     <TextInput
                        placeholder="First Name"
                        placeholderTextColor= "#9A9483"
                        value={firstName}
                        onChangeText={setFirstName}
                        style={{
                        fontsize: 16,
                        borderBottomWidth: 1,
                        borderColor: '#7DB9B6',
                        color: theme.color
                     }}
                    />
                </View>

                <View style= {{padding: 10}}>
                    <Text
                    style = {{color: '#7DB9B6'
                    }}>
                    Last Name
                     </Text>
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor= "#9A9483"
                        value={lastName}
                        onChangeText={setLastName}
                        style={{
                        fontsize: 16,
                        borderBottomWidth: 1,
                        borderColor: '#7DB9B6',
                        color: theme.color
                        }}
                    />
                </View>

                <View style= {{padding: 10}}>
                    <Text
                    style = {{color: '#7DB9B6'
                     }}>
                    Email
                    </Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor= "#9A9483"
                         value={email}
                         onChangeText={setEmail}
                         style={{
                         fontsize: 16,
                         borderBottomWidth: 1,
                         borderColor: '#7DB9B6',
                         color: theme.color
                        }}
                     />
                </View>

                 <View style= {{padding: 10}}>
                     <Text
                        style = {{color: '#7DB9B6'
                        }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="New password"
                        placeholderTextColor= "#9A9483"
                        value={password}
                        onChangeText={setPassword}
                        style={{
                        fontsize: 16,
                        borderBottomWidth: 1,
                        borderColor: '#7DB9B6',
                        color: theme.color
                        
                        }}
                    />
                 </View>

                 <View style= {{padding: 10}}>
                     <Text
                        style = {{color: '#7DB9B6'
                        }}>
                        Confirm Password
                    </Text>
                    <TextInput
                        placeholder="Confirm password"
                        placeholderTextColor= "#9A9483"
                        value={confirmPassword}
                        onChangeText={setConfirm}
                        style={{
                        fontsize: 16,
                        borderBottomWidth: 1,
                        borderColor: '#7DB9B6',
                        color: theme.color
                        
                        }}
                    />
                 </View>

                <View style= {{padding: 10}}>
                    <CustomButton 
                        text = "Save Changes " 
                        onPress={saveChanges}
                        bgColor = "#7DB9B6"
                        fgColor= "#000000" 
                    />
                </View>

                <View style= {{padding: 10,}}>
                    <CustomButton 
                        text = "Cancel " 
                        onPress={cancel}
                        bgColor={theme.background}
                        fgColor= "crimson" 
                    />
                </View>
       </View>   
    </SafeAreaView>
  );
}




export default EditProfileScreen;