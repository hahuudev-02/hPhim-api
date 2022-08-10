import admin from "firebase-admin";

import serviceAccount from "./private_key.json" assert { type: "json" };
// var serviceAccount = require("./private_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;
