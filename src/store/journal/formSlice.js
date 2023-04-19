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
    startSetingReservations: (state, { payload }) => {
      state.reservations = payload.cloudReservations;
    },
  },
});

export const { startReservation, startClearingReservation, startSetingReservations, startSettingReservationsDay } = formSlice.actions;
