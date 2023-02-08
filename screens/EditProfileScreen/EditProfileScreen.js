import { View, SafeAreaView, Text,TextInput, Image, Switch, editProfileStylesheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/Custombutton';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { editProfileStyles } from '../../components/Styles/Styling';


const EditProfileScreen = () => {
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

                <Text style = {editProfileStyles.editPic}>
                 edit photo
                </Text>
        
                <View style= {{padding: 10}}>
                     <Text
                        style = {{opacity: 0.5,
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

                <View style= {{padding: 10}}>
                    <Text
                    style = {{opacity: 0.5,
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

                <View style= {{padding: 10}}>
                    <Text
                    style = {{opacity: 0.5,
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

                 <View style= {{padding: 10}}>
                     <Text
                        style = {{opacity: 0.5,
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

                <View style= {{padding: 10}}>
                    <CustomButton 
                        text = "Save Changes " 
                        onPress={saveChanges}
                        bgColor = "#8fbc8f"
                        fgColor= "#000000" 
                    />
                </View>

                <View style= {{padding: 10}}>
                    <CustomButton 
                        text = "Cancel " 
                        onPress={saveChanges}
                        bgColor = "#FFFFFF"
                        fgColor= "crimson" 
                    />
                </View>
       </View>   
    </SafeAreaView>
  );
}




export default EditProfileScreen;