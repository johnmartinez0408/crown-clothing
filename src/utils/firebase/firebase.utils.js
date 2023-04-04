import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5GM23Ns3b7EYoiFQytuBcPAT4DL8WHqA",
  authDomain: "crown-clothing-database-bc83f.firebaseapp.com",
  projectId: "crown-clothing-database-bc83f",
  storageBucket: "crown-clothing-database-bc83f.appspot.com",
  messagingSenderId: "1096136628111",
  appId: "1:1096136628111:web:2b6f4a067139b8f4ec9dfa",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
