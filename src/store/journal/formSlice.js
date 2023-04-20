import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    reservation: [],
    reserved: false,
    reservationsDay:[],
    reservations:[],
    excludeDate:[]
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
    excludingDate: (state, {payload}) => {
      state.excludeDate = payload
    }
  },
});

export const { startReservation, startClearingReservation, startSetingReservations, startSettingReservationsDay, excludingDate } = formSlice.actions;
