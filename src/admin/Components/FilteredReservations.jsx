import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const FilteredReservations = () => {
const { reservationsPerDay } = useSelector(state => state.reservation)


  return (
    <Grid m={2}>{reservationsPerDay.map((reservations) => 
        <Grid mt={5} key={reservations.id}>
            <p>nombre: {reservations.nombre}</p> 
            <p>cantidad: {reservations.cantidad}</p> 
            <p>horario: {reservations.horario}</p> 
            <p>celular: {reservations.celular}</p> 
            <p>fecha: {reservations.fecha.toLocaleDateString() }</p> 
        </Grid> )}
    </Grid>
  )
}

export default FilteredReservations