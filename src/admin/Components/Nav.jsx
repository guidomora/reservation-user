import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import useAuthStore from '../../hooks/useAuthStore';
import useReservationStore from '../../hooks/useReservationStore';

const Nav = () => {
    const {loginOut} = useReservationStore()
    const { startLogout } = useAuthStore();

    const logOut = () => {
        loginOut()
        startLogout()
    }

    return (
        <Grid sx={{ height: 70, backgroundColor: "primary.main" }} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant='h6' sx={{ marginLeft: 2, fontFamily: "Jost", fontSize: 25, color: "secondary.main" }}>
                Reservas Realizadas
            </Typography>
            <Button sx={{ marginRight: 2 }} variant="contained" color='error' onClick={logOut}>
                Cerrar sesion
            </Button>
        </Grid>
    )
}

export default Nav