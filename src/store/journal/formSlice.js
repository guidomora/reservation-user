import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    reservation: [],
    reserved: false,
    datesToExclude:[],
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
    startSettingDatesToExclude: (state, {payload}) => {
      state.datesToExclude = payload
    },
    excludingDate: (state, {payload}) => {
      state.excludeDate = payload
    }
  },
});

export const {startSettingDatesToExclude, startReservation, startClearingReservation, startSetingReservations, startSettingReservationsDay, excludingDate } = formSlice.actions;
