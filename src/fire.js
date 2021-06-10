import firebase from 'firebase';


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDR4lJshK_TuyjRpb8xs9yV6v7XqQN2hmM",
    authDomain: "cs490-9aa65.firebaseapp.com",
    projectId: "cs490-9aa65",
    storageBucket: "cs490-9aa65.appspot.com",
    messagingSenderId: "587748251580",
    appId: "1:587748251580:web:7c656ec0b4bd1405e0fdb9"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire