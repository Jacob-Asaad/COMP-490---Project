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
              }
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
              flex: 1,
              backgroundColor: '#FFFFFF',
            },
            text: {
                fontSize: 15,
                fontWeight: 'bold',
              paddingTop: 20,
              marginRight: 145,
              marginBottom: 5,
            },
          errorText: {
            alignItems: "center",
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 10,
              fontSize: 25,
              fontWeight: "bold",
              padding: 125,
          },
        });

     export const plantProfileStyles = {
          container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
          },
          text: {
              fontSize: 15,
              fontWeight: 'bold',
            paddingTop: 20,
            marginRight: 145,
            marginBottom: 5,
          },
        errorText: {
          alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 10,
            fontSize: 25,
            fontWeight: "bold",
            padding: 125,
        },
      
      };

     export const settingsStyles = {
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
  
      },
  
      login: {
          fontSize: '20',
          fontWeight: 'bold',
          alignSelf: 'left',
          paddingBottom: '2%',
          letterSpacing: '1.2',
  
      },
  
      logo: {
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
