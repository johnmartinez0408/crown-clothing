import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Login with google</button>
    </div>
  );
};

export default SignIn;
