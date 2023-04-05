import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //Cteate user from google account if we just got redirected to this page from sign in redirect
  useEffect(() => {
    getRedirectResult(auth).then((response) => {
      if (response) {
        const userDocRef = createUserDocFromAuth(response.user);
      }
    });
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Login with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Login with google redirect
      </button>
    </div>
  );
};

export default SignIn;
