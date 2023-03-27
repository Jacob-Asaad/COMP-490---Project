const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { Expo } = require('expo-server-sdk');

admin.initializeApp();
const expo = new Expo();

exports.sendNotificationOnDatabaseUpdate = functions.database
  .ref('/moistureSensor/')
  .onUpdate(async (change, context) => {
    // Get the updated data from the Realtime Database
    const data = change.after.val();

    // Get the push notification token for the user with the updated data
    const userId = data.userId;
    const snapshot = await admin.database().ref(`users/${userId}/pushToken`).once('value');
    const pushToken = snapshot.val();

    // Construct the Expo push notification message
    const message = {
      to: pushToken,
      sound: 'default',
      title: 'Plantlink',
      body: 'Plant Data Updated',
     // data: { data },
    };

    // Send the Expo push notification
    try {
      const response = await expo.sendPushNotificationsAsync([message]);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  });





// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


