import React from "react";
import {StyleSheet,View,TextInput} from "react-native" ;

function Plant(props){ //Plant functional component holding plant data
    return( 
        <View>
            <TextInput>
                {props.name}
                {props.soilLevel}
                {props.temp}
                {props.humidity}
            </TextInput>
        </View>
    );
  };
  export default Plant 