import { useDispatch, useSelector } from "react-redux";
import { singInWithGoogle } from "../firebase/providers";
import { checkingCredentials } from "../store/auth/authSlice";

const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const checkingAuthentication = () => {
    dispatch(checkingCredentials());
  };

  const startGoogleSignIn = async () => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    console.log({result});
  };

  return {
    checkingAuthentication,
    startGoogleSignIn,
  };
};

export default useAuthStore;
