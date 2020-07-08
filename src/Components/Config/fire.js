import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDioRYn_FLdj0D95pGGEh2V68Zfei7XZ8E",
    authDomain: "hwsaverassignment.firebaseapp.com",
    databaseURL: "https://hwsaverassignment.firebaseio.com",
    projectId: "hwsaverassignment",
    storageBucket: "hwsaverassignment.appspot.com",
    messagingSenderId: "361854253289",
    appId: "1:361854253289:web:f48207334ebbf5363dd878",
    measurementId: "G-N4NY7C7G8N"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;