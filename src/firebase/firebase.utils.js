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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
   const {displayName, email } = userAuth;
   const createdAt = new Date();
   try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
       });
    } catch (error) {
      console.log('error creating user', error.message);
   }

  }
  return userRef;
};



export const addCollectionAndDocuments = async (
  
  collectionKey, objectsToAdd
  
  ) =>{

   const collectionRef = firestore.collection(collectionKey);
   const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
   return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator,collection) => {
      accumulator[collection.title.toLowerCase()] =collection;
      return accumulator;
    }, {});
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle= () => auth.signInWithPopup(provider);


  export default firebase;