import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    reservation: [],
    reserved: false,
    reservationsDay:[],
    reservations:[]
  },
  reducers: {
    startReservation: (state, { payload }) => {
      state.reservation.push(payload)
      state.reserved = true
    },
    startClearingReservation: (state) => {
      state.reservation = []
      state.reserved = false
    },
    startSettingReservationsDay: (state, { payload }) => {
      state.reservationsDay = payload;
    },
  },
});

export const { startReservation, startClearingReservation } = formSlice.actions;
