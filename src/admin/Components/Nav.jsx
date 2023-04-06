import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import useAuthStore from '../../hooks/useAuthStore';

const Nav = () => {
    const { startLogout } = useAuthStore();
    return (
        <Grid sx={{ height: 70, backgroundColor: "primary.main" }} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant='h6' sx={{ marginLeft: 2, fontFamily: "Jost", fontSize: 25, color: "secondary.main" }}>
                Reservas Realizadas
            </Typography>
            <Button sx={{ marginRight: 2 }} variant="contained" color='error' onClick={startLogout}>
                Cerrar sesion
            </Button>
        </Grid>
    )
}

export default Nav