import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
          ok: false,
          errorMessage,
        };
    }
}