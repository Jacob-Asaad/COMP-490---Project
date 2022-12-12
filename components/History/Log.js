import React from "react";
import {StyleSheet,View,TextInput} from "react-native" ;

function Log(props){
    
    

    //Plant component referencing plant data
    return( 
        <View style = {logStyles.container}>
            <TextInput style = {logDisplayStyles.headerText}> {props.name}</TextInput>
                    <TextInput style = {logDisplayStyles.headerText}>
                        {props.LogHistory}
                    </TextInput> 
                    </View>
        
    )     
};


  const logStyles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 100,
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
    const logDisplayStyles = StyleSheet.create({ //Styling to build a Circle
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
          fontSize: 15,
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

  export default Log