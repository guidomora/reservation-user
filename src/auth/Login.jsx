import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import useForm from '../hooks/useForm'
import useAuthStore from '../hooks/useAuthStore'
import { useSelector } from 'react-redux'
import useFormStore from '../hooks/useFormStore'



const Login = () => {
    const { startLoginWithEmailPassword, startGoogleSignIn, startLoginAdmin } = useAuthStore()
    const { getExcludeDate } = useFormStore()
    const { status, errorMessage, uid } = useSelector((state) => state.auth)
    const { email, password, inputChange } = useForm({
        email: "",
        password: ""
    })

    const isAuthenticating = useMemo(() => status === "checking", [status])

    const onSubmit = async (event) => {
        event.preventDefault()
        startLoginWithEmailPassword({ email, password })
        getExcludeDate()
    }

    const onGoogleSignIn = async () => {
        await startGoogleSignIn()
        console.log("on google");
    }
    return (
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn'>
            <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 450, width:{xs: 350, sm: 380, md:500}, backgroundColor: "white" }}>
                <Grid sx={{ width:{xs: 350, sm: 380, md:500} }}>
                    <Typography variant='h1' sx={{ fontSize: 25, fontFamily: "Jost", marginLeft:{ xs:5} }}>Inicio de sesion</Typography>
                    <Grid container mt={4} sx={{display: "flex", justifyContent:"center"}}>
                        <TextField
                            sx={{width:{xs:320, sm: 370, md:400}}}
                            label="Correo"
                            type="email"
                            placeholder="correo@mail.com"
                            name="email"
                            fullWidth
                            onChange={inputChange}
                            value={email}
                        />
                    </Grid>
                    <Grid item mt={4} sx={{display: "flex", justifyContent:"center"}}>
                        <TextField
                            sx={{width:{xs:320, sm: 370, md:400}}}
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
                        {errorMessage ? <Alert severity='error'>{errorMessage}</Alert> : ""}
                    </Grid>
                    <Grid display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} mt={4} sx={{ fontFamily: "Jost", width:{xs: 350, sm: 380, md:500} }}>
                        <Grid>
                            <Button
                                sx={{ width: {xs:150, md:195}  }}
                                variant="contained"
                                type="submit"
                                fullWidth
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" disabled={isAuthenticating} fullWidth sx={{ fontFamily: "Jost", width: {xs:150, md:195}  }} onClick={onGoogleSignIn}>
                                Google
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid mt={4} sx={{width: 200, marginLeft:{ xs:5}, marginRight:0}}>
                        <Link component={RouterLink} to="/auth/register">
                            <Typography sx={{ fontFamily: "Jost", fontSize: 18}}>Crear una cuenta</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login