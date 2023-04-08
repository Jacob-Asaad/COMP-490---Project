const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Expo } = require('expo-server-sdk');

admin.initializeApp();
const expo = new Expo({ accessToken: 'oxq6VuA_yrYliTDLeN0oCnwmyCammz09ct3ZG0TR' });

exports.sendNotificationOnDatabaseUpdate = functions.database
  .ref('/moistureSensor/')
  .onUpdate(async (change, context) => {
    const data = change.after.val();

    // Get the push notification token for the user with the updated data
    const userId = data.userId;
    const userSnapshot = await admin.database().ref(`users/${userId}`).once('value');
    const user = userSnapshot.val();
    const pushToken = user.expoPushToken;

    // Construct the Expo push notification message
    const message = {
      to: pushToken,
      sound: 'default',
      title: 'PlantLink',
      body: 'Plant Data Updated',
    };

    // Send the Expo push notification
    try {
      const response = await expo.sendPushNotificationsAsync([message]);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  });

  exports.sendDailyNotification = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
    const usersSnapshot = await db.collection('users').get();
  
    // Iterate through each user
    usersSnapshot.forEach(async (doc) => {
      const uid = doc.id;
      const userData = doc.data();
  
      // Check if user has given permission to receive notifications
      if (userData.receiveNotifications) {
  
        // Check the last notification timestamp
        const lastNotificationTimestamp = userData.lastNotificationTimestamp || 0;
const currentTime = Date.now();

if ((currentTime - lastNotificationTimestamp) >= (24 * 60 * 60 * 1000)) {
  // It's been more than 24 hours since last notification

  // Get the push notification token for the user
  const pushTokenSnapshot = await db.collection('users').doc(uid).collection('pushTokens').doc('expoPushToken').get();
  const pushToken = pushTokenSnapshot.data().token;

  // Construct the Expo push notification message
  const message = {
    to: pushToken,
    sound: 'default',
    title: 'PlantLink',
    body: "It's time to water your plants!",
  };

  // Send the Expo push notification
  try {
    const response = await expo.sendPushNotificationsAsync([message]);
    console.log(response);

    // Update the user's last notification timestamp
    const updateData = { lastNotificationTimestamp: currentTime };
    await db.collection('users').doc(uid).set(updateData, { merge: true });
  } catch (error) {
    console.error(error);
  }
}

      }
    });
  });
  