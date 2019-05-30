import firebase from 'firebase';

const fb_conf = {
    apiKey: "AIzaSyAWBWcmLwK4fuL8EKP_dgLO6xEZmKG7gBk",
    authDomain: "hotel-buttler.firebaseapp.com",
    databaseURL: "https://hotel-buttler.firebaseio.com",
    projectId: "hotel-buttler",
    storageBucket: "hotel-buttler.appspot.com",
    messagingSenderId: "745336334332",
    appId: "1:745336334332:web:646ecf8f05d4225d"
};

const firebase_ref = firebase.initializeApp(fb_conf);
//const firestore = firebase_ref.firestore();

export default firebase_ref.firestore();