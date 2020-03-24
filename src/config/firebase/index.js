// Import FirebaseAuth and firebase.
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDfcR5yjdHobjppOkUJohXwwbIwu4sqjLg',
  authDomain: 'hackernews-reader-eb927.firebaseapp.com',
  databaseURL: 'https://hackernews-reader-eb927.firebaseio.com',
  projectId: 'hackernews-reader-eb927',
  storageBucket: 'hackernews-reader-eb927.appspot.com',
  messagingSenderId: '791336164376',
  appId: '1:791336164376:web:e18cfe32406ff9f87c776d',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableClaims: true,
};
