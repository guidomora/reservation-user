import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    reservation: [],
    reserved: false
  },
  reducers: {
    startReservation: (state, { payload }) => {
      state.reservation.push(payload)
      state.reserved = true
    },
    startClearingReservation: (state) => {
      state.reservation = []
      state.reserved = false
    }
  },
});

export const { startReservation, startClearingReservation } = formSlice.actions;
