import { Button, Card, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useReservationStore from '../../hooks/useReservationStore';
import useFormStore from '../../hooks/useFormStore';

const FilteredReservations = () => {
  const { reservationsPerDay, activeReservation } = useSelector(state => state.reservation)
  const { setActiveReservation, deleteReservationPerDay } = useReservationStore()
  const { getExcludeDate } = useFormStore()


  const activo = activeReservation === null ? true : false

  const stop = () => {
    getExcludeDate()
  }


  return (
    <Grid>
      <Typography mt={3} variant='h1' sx={{ fontSize: 25, fontFamily: "Jost" }}>Cantidad de Reservas: {reservationsPerDay.length}</Typography>
      <Button onClick={stop} sx={{marginTop: 2}} variant='contained'>Detener reservas</Button>
      <Grid sx={{
        display: "flex",
        flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center"
      }} m={1}>{reservationsPerDay.map((reservations) =>
        <Grid className='item' mt={1} key={reservations.id} p={1} onClick={()=>setActiveReservation(reservations)}>
          <Card variant='outlined' sx={{
            width: 230, height: 210, display: "flex",
            flexDirection: "column", justifyContent: "center", alignItems: "center",
            padding: 1
          }}>
            <Typography sx={{ fontWeight: "bold" }}>Nombre: {reservations.nombre}</Typography>
            <Typography>Cantidad: {reservations.cantidad}</Typography>
            <Typography>Horario: {reservations.horario}</Typography>
            <Typography>Celular: {reservations.celular}</Typography>
            <Typography>Fecha: {reservations.fecha.toLocaleDateString()}</Typography>
            <Button disabled={activo} variant='outlined' sx={{ marginTop: 1 }} onClick={deleteReservationPerDay}>
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


