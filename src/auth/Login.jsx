import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from '../hooks/useForm'
import useAuthStore from '../hooks/useAuthStore'

const Login = () => {
    const { checkingAuthentication, startGoogleSignIn } = useAuthStore()

    const { email, password, inputChange } = useForm({
        email: "guido@mail.com",
        password: "123456"
    })

    const onSubmit = async (event) => {
        event.preventDefault()
        await checkingAuthentication()
        console.log({ email, password });
    }

    const onGoogleSignIn = async () => {
        await startGoogleSignIn()
        console.log("on google");
    }
    return (
        <form onSubmit={onSubmit}>
            <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 400, width: 500, backgroundColor: "#edf6f9" }}>
                <Grid sx={{ width: 400 }}>
                    <Typography variant='h1' sx={{ fontSize: 25, fontFamily: "Jost", }}>Inicio de sesion</Typography>
                    <Grid container mt={4}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@mail.com"
                            name="email"
                            fullWidth
                            onChange={inputChange}
                            value={email}
                        />
                    </Grid>
                    <Grid item mt={4}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            fullWidth
                            onChange={inputChange}
                            value={password}
                        />
                    </Grid>
                    <Grid display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} mt={4} sx={{ fontFamily: "Jost", width: 400 }}>
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
                            <Button variant="contained" fullWidth sx={{ fontFamily: "Jost", width: 195 }} onClick={onGoogleSignIn}>
                                Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid mt={4}>
                        <Link component={RouterLink} to="/auth/register">
                            <Typography sx={{ fontFamily: "Jost", fontSize: 18 }}>Crear una cuenta</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login