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

  const plantStyles = StyleSheet.create({
    container:{
        backgroundColor: '#895737',
        width: '110%',
        height: 150,
        borderColor: "#895737",
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
          backgroundColor: '#dab49d',
          margin: 3,
        },
        headerText: {
          fontSize: 12,
          textAlign: "center",
          margin: 10,
          fontWeight: "bold"
        }, 
      });

  export default Plant 