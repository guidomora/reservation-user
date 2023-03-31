import { async } from "@firebase/util";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../firebase/providers";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";

const useAuthStore = () => {
  const dispatch = useDispatch();

  const checkingAuthentication = () => {
    dispatch(checkingCredentials());
  };

  const startGoogleSignIn = async () => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }
    dispatch(login(result));
  };

  const startCreatingUserWithEmailPassword = async ({
    password,
    email,
    displayName,
  }) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({
      password,
      email,
      displayName,
    });
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage }));
    }
    dispatch(login(result));
  };

  const startLoginWithEmailPassword = async ({ email, password }) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    console.log(result);
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage }));
    }
    dispatch(login(result));
  };

  const startLogout = async () => {
    await logoutFirebase();
    dispatch(logout());
  };

  return {
    checkingAuthentication,
    startGoogleSignIn,
    startCreatingUserWithEmailPassword,
    startLoginWithEmailPassword,
    startLogout,
  };
};

export default useAuthStore;
