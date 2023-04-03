import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    reservation: {
      fecha: "",
      horario: "",
      cantidad: "",
    },
  },
  reducers: {
    startReservation: (state, { payload }) => {
      state.reservation.fecha = payload;
      state.reservation.horario = payload;
      state.reservation.cantidad = payload;
    },
  },
});

export const { startReservation } = formSlice.actions;
