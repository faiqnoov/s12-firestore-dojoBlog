import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9sVZbxi-llLuV0T5nfYtjsi9hyYOW_iY",
  authDomain: "udemy-v3f.firebaseapp.com",
  projectId: "udemy-v3f",
  storageBucket: "udemy-v3f.appspot.com",
  messagingSenderId: "447354940065",
  appId: "1:447354940065:web:bc7f1c3aeb56b3fc7a5ee0"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// export firestore
export { projectFirestore }
