
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const redTheme = createTheme({
    palette: {
        primary: {
            main: '#14213d'
        },
        secondary: {
            main: '#ffffff'
        },
        error: {
            main: red.A400
        },
        typography: {
            fontFamily:["Helvetica Neue"]
        }
    }
})