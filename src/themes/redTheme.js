
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const redTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#fca311'
        },
        error: {
            main: red.A400
        },
        typography: {
            fontFamily:["Helvetica Neue"]
        }
    }
})