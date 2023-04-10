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
  },
});

// Action creators are generated for each case reducer function
export const {
  startSetingReservations,
  startSettingReservationsPerDay,
  startDeletingReservationsPerDay,
  startSettingActiveReservation,
} = reservationSlice.actions;
