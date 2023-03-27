import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <form>
            <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 400, width: 500, backgroundColor: "#edf6f9" }}>
                <Grid sx={{ width: 400 }}>
                    <Typography variant='h1' sx={{fontSize: 25, fontFamily: "Jost",}}>Inicio de sesion</Typography>
                    <Grid container mt={4}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@mail.com"
                            name="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item mt={4}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} mt={4} sx={{fontFamily: "Jost", width: 400 }}>
                        <Grid>
                            <Button
                                sx={{ width: 195 }}
                                variant="contained"
                                type="submit"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" fullWidth sx={{fontFamily: "Jost", width: 195 }}>
                                Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid mt={4}>
                        <Typography sx={{fontFamily: "Jost", fontSize:18}}>Crear una cuenta</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login