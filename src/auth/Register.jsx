import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
    return (
        <form>
            <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 500, width: 500, backgroundColor: "#edf6f9" }}>
                <Grid sx={{ width: 400 }}>
                    <Typography variant='h1' sx={{ fontSize: 25, fontFamily: "Jost", }}>Crear cuenta</Typography>
                    <Grid container mt={4}>
                        <TextField
                            label="Nombre y apellido"
                            placeholder="Nombre y apellido"
                            name="name"
                            fullWidth
                        />
                    </Grid>
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
                    <Grid display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} mt={4} sx={{ fontFamily: "Jost", width: 400 }}>
                        <Grid>
                            <Button
                                sx={{ width: 400 }}
                                variant="contained"
                                type="submit"
                                fullWidth
                            >
                                Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid mt={4}>
                        <Link component={RouterLink} to="/auth/login">
                            <Typography sx={{ fontFamily: "Jost", fontSize: 18 }}>Ya tiene cuenta? Ingrese aqui.</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Register