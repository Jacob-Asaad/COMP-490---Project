import React from "react";
import {StyleSheet,View,TextInput} from "react-native" ;

function Plant(props){ //Plant component referencing plant data
    return( 
        <View style = {plantStyles.container}>
            <TextInput style = {circleDisplayStyles.headerText}> {props.name}</TextInput>
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

  const plantStyles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: '110%',
        height: 150,
        borderColor: "#000000",
        paddingVertical:35,
        borderWidth: 3,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15,
  } 
    });
    const circleDisplayStyles = StyleSheet.create({ //Styling to build a Circle
        container: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          width: 86,
          height: 86,
          borderRadius: 150 / 2,
          backgroundColor: '#588157',
          margin: 3,
        },
        headerText: {
          fontSize: 12,
          textAlign: "center",
          margin: 14,
          fontWeight: "bold"
        }, 
        ReadingText: {
            fontSize: 15,
            textAlign: "center",
            paddingBottom: 100,
            margin: 14,
            fontWeight: "bold"
          }, 
      });

  export default Plant 