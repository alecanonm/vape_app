import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./Credentials";

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.log(error);
  }
};

export default loginWithGoogle;
