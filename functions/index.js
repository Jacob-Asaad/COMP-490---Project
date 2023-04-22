const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.getUserData = functions.https.onRequest(async (req, res) => {
  try {
    const data = await db.collection("users").get();
    const users = [];
    data.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Something went wrong"});
  }
});

exports.addUserData = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({error: "Method not allowed"});
  }
  try {
    const {name, email} = req.body;
    const user = {name, email};
    const data = await db.collection("users").add(user);
    return res.json({message: `User added with ID: ${data.id}`});
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Something went wrong"});
  }
});
