import React from "react";
import {StyleSheet,View,TextInput} from "react-native" ;
import {plantStyles, circleDisplayStyles} from "../Styles/Styling";

function Plant(props){ //Plant component referencing plant data
    return( 
        <View style = {plantStyles.container}>
            <TextInput style = {circleDisplayStyles.headerText}> {props.name}</TextInput>
                <View style = {circleDisplayStyles.container}>
                    <TextInput style = {circleDisplayStyles.headerText}>
                        {props.soilLevel}
                    </TextInput> 
                </View>
                <View style = {circleDisplayStyles.container}>
                    <TextInput style = {circleDisplayStyles.headerText}>
                        {props.humidity}
                    </TextInput> 
                </View>
                <View  style = {circleDisplayStyles.container}>
                    <TextInput style = {circleDisplayStyles.headerText}>
                        {props.temp}
                    </TextInput> 
                </View>
        </View>
    );
  };

  

  export default Plant 