import React, {useContext} from "react";
import {StyleSheet,View,TextInput, Image} from "react-native" ;
import {plantStyles, circleDisplayStyles, plantProfileStyles} from "../Styles/Styling";
import themeContext from "../../theme/themeContext";

function Plant(props){ //Plant component referencing plant data
    const theme = useContext(themeContext);
    return( 
        <View style = {[circleDisplayStyles.contain, {backgroundColor: theme.background}]}>
        <TextInput style = {[circleDisplayStyles.plantNameText, {color: theme.color}]}> {props.name}</TextInput>
            <View style={[circleDisplayStyles.imageContain, {backgroundColor: theme.background}]}>
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