import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { formSlice } from "./journal/formSlice";
import { reservationSlice } from "./ReservationPanel/reservationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    form: formSlice.reducer,
    reservation: reservationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
