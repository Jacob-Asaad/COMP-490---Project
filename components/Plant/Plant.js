import React from "react";
import {StyleSheet,View,TextInput, Image} from "react-native" ;
import {plantStyles, circleDisplayStyles, plantProfileStyles} from "../Styles/Styling";

function Plant(props){ //Plant component referencing plant data
    return( 
        <View style = {circleDisplayStyles.contain}>
        <TextInput style = {circleDisplayStyles.plantNameText}> {props.name}</TextInput>
            <View style={circleDisplayStyles.imageContain}>
      <Image 
      source={props.image} style={plantProfileStyles.images}
      />
    </View>
                <View style = {circleDisplayStyles.container}>
                    <TextInput style = {circleDisplayStyles.headerText}>
                        {props.soilLevel}
                    </TextInput> 
                    <TextInput style = {circleDisplayStyles.ReadingText}>
                        {props.soilReading}
                    </TextInput> 
                </View>
                <View style = {circleDisplayStyles.container}>
                    <TextInput style = {circleDisplayStyles.headerText}>
                        {props.humidity}
                    </TextInput> 
                    <TextInput style = {circleDisplayStyles.ReadingText}>
                        {props.humidityReading}
                    </TextInput> 
                </View>
                <View  style = {circleDisplayStyles.container}>
                    <TextInput style = {circleDisplayStyles.headerText}>
                        {props.temp}
                    </TextInput> 
                    <TextInput style = {circleDisplayStyles.ReadingText}>
                        {props.tempReading}
                    </TextInput> 
                </View>
        </View>
    );
  };

  

  export default Plant 