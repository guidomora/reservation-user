import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
   login: (state, {payload}) => {
    state.status = "authenticated";
    state.uid = payload.uid;
    state.email = payload.email;
    state.displayName = payload.displayName;
    state.errorMessage = null;
   },
   checkingCredentials: (state) => {
    state.status = "checking";
  },
   logout: (state, {payload}) => {
    state.status = "not-authenicated";
    state.uid = null;
    state.email = null;
    state.displayName = null;
    state.errorMessage = payload?.errorMessage;
   }
  },
});

// Action creators are generated for each case reducer function
export const { login, checkingCredentials, logout } = authSlice.actions;
