import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3TMn2HKcVMbKvb1wdpWT4zgY5T7MK9FI",
    authDomain: "fintech2019-funput.firebaseapp.com",
    databaseURL: "https://fintech2019-funput.firebaseio.com",
    projectId: "fintech2019-funput",
    storageBucket: "fintech2019-funput.appspot.com",
    messagingSenderId: "653579816101",
    appId: "1:653579816101:web:2b839d1a755f903349d14c",
    measurementId: "G-M0TX4SYR5K"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();
const database = firebase.database();


export default storage;
export default database;

