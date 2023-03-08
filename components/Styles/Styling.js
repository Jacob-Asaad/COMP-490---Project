import { StyleSheet } from 'react-native'

export const customInputStyles = {
    container: {
 
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    borderColor: "#e8e8e8",
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'flex',
    padding: 10,
    marginVertical: 10,
    },
    input: {},
    };

   export const plantStyles = {
        container:{
            backgroundColor: '#FFFFFF',
            width: '100%',
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
        };
      export const circleDisplayStyles = { //Styling to build a Circle
            container: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              width: 90,
              height: 86,
              borderRadius: 150 / 2,
              backgroundColor: '#588157',
              margin: 3,
            },
            plantText: {
              marginTop: 50,
              padding: 20,
              fontWeight: "bold",
              fontSize: 20,
              },
              headerText: {
                fontSize: 12,
                textAlign: "center",
                margin: 10,
                fontWeight: "bold",
              }, 
              CircleShape: {
                width: 100,
                height: 100,
                borderRadius: 150 / 2,
                backgroundColor: '#588157',
              },
              buttons: {
                margin: 20,
                alignSelf: 'center',
                backgroundColor: "#577157",
                borderRadius: 100,
                height: 60,
                width: 60,
              },
              buttons2: {
                margin: 20,
                alignSelf: 'flex-end',
                backgroundColor: "#577157",
                borderRadius: 100,
                height: 60,
                width: 60,
              },
              ReadingText: {
                fontSize: 15,
                textAlign: "center",
                paddingBottom: 100,
                margin: 14,
                fontWeight: "bold"
              }, 
          };

        export  const tabStyles = {
            shadow: {
                shadowColor: '#7F5DF0',
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
                },
            };

          export const editProfileStyles = {
              container: {
                flex: 1,
                backgroundColor: '#FFFFFF',
          
              },
              contain: {
                  flex: 1,
                  alignContent: 'center',
                  margin: 25,
                  padding: 20,
                  
              },
              image:{
                 flex: 1,
                 width: undefined,
                 height: undefined,
                 borderRadius: 100,
                 paddingTop: 10,
              },
              profileImage:{
                alignSelf: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  overflow: "hidden",
                  marginTop: 50,
          },
              text: {
                  fontSize: 15,
                  fontWeight: 'bold',
                paddingTop: 20,
                marginRight: 145,
                marginBottom: 5,
              },
          
              editPic: {
                alignItems: "center",
                alignSelf: "center",
                marginTop: 10,
                fontSize: 15,
                color: 'green',
            },
            buttons: {
              align: "center",
            }
          
          
          };

         export const historyLogStyles = StyleSheet.create({
            container: {
              flex:1,
              
            },
            text: {
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              width: '100%',
              borderColor: 'black',
              paddingVertical: 30,
              marginVertical: -40,
              borderWidth: 2.5,
              borderRadius: 10,
              flex: 1,
              padding: 30,
            },
          errorText: {
            alignItems: "center",
              alignSelf: "center",
              marginBottom: 10,
              fontSize: 25,
              fontWeight: "bold",
              padding: 90,
          },
        });

     export const plantProfileStyles = {
          container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignContent: "space-around",
          },
          text: {
              fontSize: 15,
              fontWeight: 'bold',
            paddingTop: 20,
            marginRight: 145,
            marginBottom: 5,
          },
        errorText: {
          alignContent: "space-around",
          top: -60,
          alignItems: "center",
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
           
        },
      
      };

     export const settingsStyles = {
        container: {
          flex: 1,
          backgroundColor: '#FFFFFF',
          height: 875,
    
        },
        contain: {
            flex: 1,
            alignContent: 'center',
            margin: 25,
            padding: 20,
            
        },
        rows : {
          flexDirection: 'row',
          paddingTop: 5,
          paddingBottom: 5,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        },
    
        image:{
           flex: 1,
           width: undefined,
           height: undefined,
           paddingTop: 10,
        },
        profileImage:{
          alignSelf: 'center',
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: "hidden",
            marginTop: 31,
    },
        text: {
            fontSize: 15,
            fontWeight: 'bold',
          paddingTop: 20,
          marginRight: 145,
          marginBottom: 5,
        },
    
        emailName: {
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
          fontSize: 15,
      },
      settings: {
        alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 10,
          fontSize: 25,
          fontWeight: "bold",
      },
      switch: {
        flex: 1,
        alignSelf: "right",
        
      },
      buttons: {
        align: "center",
      }
    
    
    };

  export  const signInStyles = {
      root: {
        flex: 1,
          alignItems: 'center',
          padding: 30,
          backgroundColor: 'white',
         height: 925,
      },
  
      login: {
          fontSize: '20',
          fontWeight: 'bold',
          alignSelf: 'left',
          paddingBottom: '3%',
          letterSpacing: '1.2',
  
      },
  
      logo: {
        marginTop: 45,
          width: '70%',
          maxWidth: 300,
          maxHeight: 200,
          backgroundColor: 'white',
      },
  };

export const signUpStyles = {
    root: {
        alignItems: 'center',
        padding: 30,

    },

    title: {
        fontSize: '20',
        fontWeight: 'bold',
        alignSelf: 'left',
        paddingBottom: '2%',
        letterSpacing: '1.2',

    },
    registerText: {
        color: 'gray',
        marginVertical: 5,

    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,

    },
};

export const appStyles = {
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
};

export default {customInputStyles, plantStyles, circleDisplayStyles, tabStyles, editProfileStyles, historyLogStyles, plantProfileStyles, settingsStyles, signInStyles, signUpStyles, appStyles}
