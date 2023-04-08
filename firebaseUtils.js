import firebase from "firebase/app";
import "firebase/firestore";
import { db, fire } from './config';

export const updatePushToken = async (uid, token) => {
  const userRef = fire.collection("users").doc(uid);
  const userDoc = await userRef.get();
  if (userDoc.exists) {
    const { expoPushToken } = userDoc.data();
    if (!expoPushToken) {
      await userRef.update({ expoPushToken: token });
    }
  }
};

export const getUserByEmail = async (email) => {
  const query = db.collection("users").where("email", "==", email).limit(1);
  const querySnapshot = await query.get();
  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    return {
      id: userDoc.id,
      ...userDoc.data(),
    };
  }
  return null;
};

export default {updatePushToken, getUserByEmail}