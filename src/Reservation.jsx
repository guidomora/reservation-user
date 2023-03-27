
import { Grid } from '@mui/material'
import './App.css'
import FirstForm from './components/FirstForm'
import Login from './components/Login'
import Register from './components/Register'
import { AppTheme } from './themes/AppTheme'

function Reservation() {


  return (
    <AppTheme>
      <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} className="firstContainer">
        {/* <FirstForm /> */}
        {/* <Login /> */}
        <Register />
      </Grid>
    </AppTheme>

  )
}

export default Reservation
