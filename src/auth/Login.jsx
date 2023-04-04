import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import useForm from '../hooks/useForm'
import useAuthStore from '../hooks/useAuthStore'
import { useSelector } from 'react-redux'



const Login = () => {
    const { startLoginWithEmailPassword, startGoogleSignIn, startLoginAdmin } = useAuthStore()
    const { status, errorMessage, uid } = useSelector((state) => state.auth)
    const { email, password, inputChange } = useForm({
        email: "",
        password: ""
    })

    const isAuthenticating = useMemo(() => status === "checking", [status])

    const onSubmit = async (event) => {
        event.preventDefault()
        startLoginWithEmailPassword({email, password})
    }

    const onGoogleSignIn = async () => {
        await startGoogleSignIn()
        console.log("on google");
    }
    return (
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
            <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 450, width: 500, backgroundColor: "#edf6f9" }}>
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
                    <Grid mt={2}>
                        {errorMessage ?  <Alert severity='error'>{errorMessage}</Alert> : ""}
                    </Grid>
                    <Grid display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} mt={4} sx={{ fontFamily: "Jost", width: 400 }}>
                        <Grid>
                            <Button
                                sx={{ width: 195 }}
                                variant="contained"
                                type="submit"
                                fullWidth
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" disabled={isAuthenticating} fullWidth sx={{ fontFamily: "Jost", width: 195 }} onClick={onGoogleSignIn}>
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