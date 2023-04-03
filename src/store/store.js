import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { formSlice } from "./journal/formSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    form: formSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
