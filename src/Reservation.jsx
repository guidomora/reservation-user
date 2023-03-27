
import { Grid } from '@mui/material'
import './App.css'
import AppRouter from './router/AppRouter'
import { AppTheme } from './themes/AppTheme'

function Reservation() {


  return (
    <AppTheme>
      <Grid display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} className="firstContainer">
        <AppRouter />
      </Grid>
    </AppTheme>

  )
}

export default Reservation
