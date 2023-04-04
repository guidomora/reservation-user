import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    reservation: []
  },
  reducers: {
    startReservation: (state, { payload }) => {
      state.reservation.push(payload)
    },
  },
});

export const { startReservation } = formSlice.actions;
