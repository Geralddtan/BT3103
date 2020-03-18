import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCq53uvRHDjOIec1II6yEpUFsc85Nod7kI",
    authDomain: "grocery-project-e4ea2.firebaseapp.com",
    databaseURL: "https://grocery-project-e4ea2.firebaseio.com",
    projectId: "grocery-project-e4ea2",
    storageBucket: "grocery-project-e4ea2.appspot.com",
    messagingSenderId: "443336581221",
    appId: "1:443336581221:web:22e130ca26a6eceb24668c",
    measurementId: "G-SDK78LMRVH"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;