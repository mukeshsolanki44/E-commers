

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

    var firebaseConfig = {
        apiKey: "AIzaSyB4sBrgLZvdSxYmbCcIY1tel5WXsIDqnr0",
        authDomain: "medical-f3c62.firebaseapp.com",
        databaseURL: "https://medical-f3c62.firebaseio.com",
        projectId: "medical-f3c62",
        storageBucket: "medical-f3c62.appspot.com",
        messagingSenderId: "352083995376",
        appId: "1:352083995376:web:3cf2e92ec879de32de3035"
      };

  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);

export default firebaseApp


