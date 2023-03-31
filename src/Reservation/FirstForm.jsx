import { Button, Grid, Typography } from '@mui/material'
import { addDays } from 'date-fns';
import React from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import "../App.css"
import useAuthStore from '../hooks/useAuthStore';

const FirstForm = () => {
    const { displayName } = useSelector(state => state.auth)
    const { startLogout } = useAuthStore()
    return (
        <Grid display={"flex"} flexDirection={"col"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 500, width: 500, backgroundColor: "#edf6f9" }}>
            <Grid>
                <Grid display={'flex'}>
                    <Button variant='contained' onClick={startLogout}>Cerrar sesion</Button>
                </Grid>
                <Typography variant='h1' sx={{ fontFamily: "Jost", }} fontSize={25} mt={3} >Reservar una mesa : {displayName}</Typography>
                <Grid mt={3}>
                    <Typography variant='p' sx={{ fontFamily: "Jost" }}>Seleccione fecha</Typography>
                    <ReactDatePicker 
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 4) }
                    />
                </Grid>

                <Grid mt={3}>
                    <Typography variant='p' sx={{ fontFamily: "Jost" }}>Seleccione horario</Typography>
                    <select id="inputState" className="form-select">
                        <option>20hs</option>
                        <option>21hs</option>
                        <option>22hs</option>
                    </select>
                </Grid>
                <Grid mt={3}>
                    <Typography variant='p' sx={{ fontFamily: "Jost" }}>Cantidad de personas</Typography>
                    <select id="inputState" className="form-select">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </Grid>
                <Grid mt={3}>
                    <Button variant='contained' sx={{ backgroundColor: "secondary.main", fontFamily: "Jost" }}>Siguiente</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FirstForm