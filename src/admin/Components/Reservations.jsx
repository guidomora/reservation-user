import React, { useEffect } from 'react'
import useReservationStore from '../../hooks/useReservationStore'
import { useSelector } from 'react-redux'
import { Button, Grid } from '@mui/material'
import { addDays } from 'date-fns'
import controlDates from '../../hooks/controlDates'

const ReservationsSideBar = () => {
  const {actualDay, secondDay, thirdDay, fourthDay, fifthDay} = controlDates()
  const { reservations } = useSelector(state => state.reservation)
  const { setReservations } = useReservationStore()


  useEffect(() => {
    setReservations()
  }, [reservations])

  
  return (
    <Grid mr={6} height={200} display={"flex"} flexDirection={"column"}>
        <Button variant='outlined' sx={{color:"primary.main" ,backgroundColor: "#caf0f8"}} onClick={actualDay}>{new Date().toLocaleDateString()}</Button>
        <Button variant='outlined' sx={{color:"primary.main" ,backgroundColor: "#caf0f8"}} onClick={secondDay}>{addDays(new Date(), 1).toLocaleDateString()}</Button>
        <Button variant='outlined' sx={{color:"primary.main" ,backgroundColor: "#caf0f8"}} onClick={thirdDay}>{addDays(new Date(), 2).toLocaleDateString()}</Button>
        <Button variant='outlined' sx={{color:"primary.main" ,backgroundColor: "#caf0f8"}} onClick={fourthDay}>{addDays(new Date(), 3).toLocaleDateString()}</Button>
        <Button variant='outlined' sx={{color:"primary.main" ,backgroundColor: "#caf0f8"}} onClick={fifthDay}>{addDays(new Date(), 4).toLocaleDateString()}</Button>
    </Grid>
  )
}

export default ReservationsSideBar

