import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Nav from './Components/Nav';
import Reservations from './Components/Reservations';

const Admin = () => {
  
  return (
    <Grid
      sx={{ height: "100vh", width: "100vw", backgroundColor: "#edf6f9" }}
      className='animate__animated animate__fadeIn'>
      <Grid>
        <Nav />
        <Reservations />
      </Grid>
    </Grid>
  )
}

export default Admin