import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Nav from './Components/Nav';
import ReservationsSideBar from './Components/Reservations';
import FilteredReservations from './Components/FilteredReservations';

const Admin = () => {

  return (
    <Grid
      sx={{ height: "100vh", width: "100vw", backgroundColor: "#edf6f9" }}
      className='animate__animated animate__fadeIn'>
      <Grid>
        <Nav />
        <Grid display="flex" flexDirection="row">
          <ReservationsSideBar/>
          <FilteredReservations />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Admin