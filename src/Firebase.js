import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDMMPSff1lWZOA21X9Oz3UepjHxIJp10bQ",
        authDomain: "myshop-e368e.firebaseapp.com",
        databaseURL: "https://myshop-e368e.firebaseio.com",
        projectId: "myshop-e368e",
        storageBucket: "myshop-e368e.appspot.com",
        messagingSenderId: "497813186708",
        appId: "1:497813186708:web:1941e38b21cad46af4ec81",
        measurementId: "G-MGJECVSTN6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};