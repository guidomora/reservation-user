import { Grid, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const End = () => {
    return (
        <Grid display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"solid 1px #C4C4C4"}
            borderRadius={4}
            sx={{ height: 300, width: 500, backgroundColor: "#edf6f9" }}
            className='animate__animated animate__fadeIn'>
            <Grid sx={{ width: 400, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid sx={{ width: 400, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='h6' sx={{ fontFamily: "Jost", fontSize: 25, textAlign: "center" }}>Su reserva ha sido realizada con exito!</Typography>
                    <CheckCircleOutlineIcon sx={{ marginTop: 4, color: "#02D86E", fontSize: 70 }} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default End