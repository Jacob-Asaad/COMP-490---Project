import React from 'react';
import {View, Switch} from 'react-native';

export default function CustomSwitch(props){

    return (
        <View>
            <Switch
                trackColor={{ false: "#767577", true: "seagreen" }}
                thumbColor = {"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.toggleSwitch}
                value = {props.isEnabled}
            />
        </View>
    );
}