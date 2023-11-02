const firebaseConfig = {
  apiKey: "AIzaSyAObUu7YCZMOi1patICx1BOxUt1A_F7KzI",
  authDomain: "systemaccess-4bec6.firebaseapp.com",
  projectId: "systemaccess-4bec6",
  storageBucket: "systemaccess-4bec6.appspot.com",
  messagingSenderId: "1004592191095",
  appId: "1:1004592191095:web:f201355f15d9faaf8c1872",
  measurementId: "G-WFHNNEV5LR"
};

firebase.initializeApp(firebaseConfig);


//firestor connection
const firestore = firebase.firestore();