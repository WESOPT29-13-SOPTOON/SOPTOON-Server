const admin = require("firebase-admin");
const serviceAccount = require("./we-sopt-29-46fb9-firebase-adminsdk-fv7jk-c222f81c12");
const dotenv = require("dotenv");
const e = require("express");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
    firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    }); 
} else {
    firebase = admin.app();
}

module.exports = {
    api: require("./api"),
};