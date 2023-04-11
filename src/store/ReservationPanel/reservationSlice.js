import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservations: [],
    reservationsPerDay: [],
    activeReservation: null,
  },
  reducers: {
    startSetingReservations: (state, { payload }) => {
      state.reservations = payload.cloudReservations;
    },
    startSettingReservationsPerDay: (state, { payload }) => {
      state.reservationsPerDay = payload;
    },
    startSettingActiveReservation: (state, { payload }) => {
      state.activeReservation = payload;
    },
    startDeletingReservationsPerDay: (state, { payload }) => {
      state.reservationsPerDay = state.reservationsPerDay.filter(
        (reservation) => reservation.id !== payload
      );
    },
    startLogout : (state) => {
      state.reservationsPerDay = []
      state.activeReservation = null;
    }
  },
});

export const {
  startSetingReservations,
  startSettingReservationsPerDay,
  startDeletingReservationsPerDay,
  startSettingActiveReservation,
  startLogout
} = reservationSlice.actions;
