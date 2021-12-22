import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
  apiKey: "AIzaSyBw31ALmZ7pRAZvE3-tGFmyEWRymBh_MJI",
  authDomain: "c-71-fdb90.firebaseapp.com",
  projectId: "c-71-fdb90",
  storageBucket: "c-71-fdb90.appspot.com",
  messagingSenderId: "1080041305687",
  appId: "1:1080041305687:web:41621eed3686cd16049512"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


