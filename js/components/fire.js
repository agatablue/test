import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDYdFhAqkoqe69rK7D6cDNf6oNaeBOB_Yc",
    authDomain: "pierwszy-projekt-74a74.firebaseapp.com",
    databaseURL: "https://pierwszy-projekt-74a74.firebaseio.com",
    projectId: "pierwszy-projekt-74a74",
    storageBucket: "pierwszy-projekt-74a74.appspot.com",
    messagingSenderId: "600174132138"
  };
var fire = firebase.initializeApp(config);
export default fire;