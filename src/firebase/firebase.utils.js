import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVQB2xw2sYBEQMAOA0_7wDrSbY9UEzKzg",
  authDomain: "abhi-db-67400.firebaseapp.com",
  databaseURL: "https://abhi-db-67400.firebaseio.com",
  projectId: "abhi-db-67400",
  storageBucket: "abhi-db-67400.appspot.com",
  messagingSenderId: "591571056687",
  appId: "1:591571056687:web:e3c98be93a0d237dc32eda",
  measurementId: "G-BVH40XHF6M"
};

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle= () => auth.signInWithPopup(provider);


  export default firebase;