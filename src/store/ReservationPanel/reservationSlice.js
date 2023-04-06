import { createSlice } from '@reduxjs/toolkit';

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        reservations: []
    },
    reducers: {
        startSetingReservations: (state, {payload}) => {
            state.reservations = payload.cloudReservations
        },
    }
});


// Action creators are generated for each case reducer function
export const { startSetingReservations } = reservationSlice.actions;