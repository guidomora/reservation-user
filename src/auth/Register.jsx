import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import useForm from '../hooks/useForm'
import useAuthStore from '../hooks/useAuthStore'
import { useDispatch, useSelector } from 'react-redux'

const formData = {
    displayName: "guido",
    email: "guido@mail.com",
    password: "123456",
};


const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe de tener una @"],
    password: [
        (value) => value.length >= 6,
        "El password debe tener 6 o mas caracteres",
    ],
    displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};


const Register = () => {
    const { startCreatingUserWithEmailPassword } = useAuthStore()
    const { status, errorMessage } = useSelector(state => state.auth)
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { displayName,
        email,
        password,
        inputChange,
        formState,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid, } = useForm(formData, formValidations)


    const isAuthenticating = useMemo(() => status === "checking", [status])

    const onSubmit = async (event) => {
        event.preventDefault()
        setFormSubmitted(true);
        if (!isFormValid) return
        await startCreatingUserWithEmailPassword(formState)
    }


    return (
        <form onSubmit={onSubmit}>
            <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} border={"solid 1px #C4C4C4"} borderRadius={4} sx={{ height: 500, width: 500, backgroundColor: "#edf6f9" }}>
                <Grid sx={{ width: 400 }}>
                    <Typography variant='h1' sx={{ fontSize: 25, fontFamily: "Jost", }}>Crear cuenta</Typography>
                    <Grid container mt={4}>
                        <TextField
                            label="Nombre y apellido"
                            placeholder="Nombre y apellido"
                            name="name"
                            fullWidth
                            value={displayName}
                            onChange={inputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid container mt={4}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@mail.com"
                            name="email"
                            fullWidth
                            value={email}
                            onChange={inputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item mt={4}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            fullWidth
                            value={password}
                            onChange={inputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} mt={4} sx={{ fontFamily: "Jost", width: 400 }}>
                        <Grid>
                            {errorMessage ? <Alert sx={{marginBottom: 2}} severity='error'>{errorMessage}</Alert> : ""}
                            <Button
                                sx={{ width: 400 }}
                                variant="contained"
                                type="submit"
                                fullWidth
                                disabled={isAuthenticating}
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