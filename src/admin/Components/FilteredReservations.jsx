import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const FilteredReservations = () => {
  const { reservationsPerDay } = useSelector(state => state.reservation)

  const activeReservation = () => {
   const hola = reservationsPerDay.forEach(reservation => reservation.id)
   console.log(hola);
  }

  const deleteRes = () => {
    console.log("hola")
  }

  return (
    <Grid>
      <Typography variant='h1' sx={{ fontSize: 25 }}>Cantidad de Reservas: {reservationsPerDay.length}</Typography>
      <Grid sx={{
        display: "flex",
        flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center"
      }} m={2}>{reservationsPerDay.map((reservations) =>
        <Grid mt={3} key={reservations.id} p={2} onClick={activeReservation} >
          <Card variant='outlined' sx={{
            width: 230, height: 210, display: "flex",
            flexDirection: "column", justifyContent: "center", alignItems: "center"
          }}>
            <Typography sx={{ fontWeight: "bold" }}>Nombre: {reservations.nombre}</Typography>
            <Typography>Cantidad: {reservations.cantidad}</Typography>
            <Typography>Horario: {reservations.horario}</Typography>
            <Typography>Celular: {reservations.celular}</Typography>
            <Typography>Fecha: {reservations.fecha.toLocaleDateString()}</Typography>
            <Button variant='outlined' sx={{ marginTop: 1 }}>
              Eliminar Reserva
              <DeleteForeverIcon color='error' fontSize='medium' />
            </Button>
          </Card>
        </Grid>)}
      </Grid>
    </Grid>

  )
}

export default FilteredReservations


