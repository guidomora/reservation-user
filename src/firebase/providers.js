import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
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

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
     const resp = await createUserWithEmailAndPassword(auth, email, password, displayName)
     const {uid, photoURL} = resp.user
    await updateProfile(auth.currentUser, {displayName})

     return {
        ok: true,
        uid, photoURL, email, displayName
     }
    } catch (error) {
        return {
            ok: false, 
            errorMessage: error.message
        }
    }
}