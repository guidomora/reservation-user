import { createSlice } from '@reduxjs/toolkit';

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        reservations: [],
        reservationsPerDay:[],
        activeDay: null,
    },
    reducers: {
        startSetingReservations: (state, {payload}) => {
            state.reservations = payload.cloudReservations
        },
        startSettingReservationsPerDay: (state, {payload}) => {
            state.reservationsPerDay = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { startSetingReservations, startSettingReservationsPerDay, probandoReset } = reservationSlice.actions;