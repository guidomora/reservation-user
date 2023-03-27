import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { redTheme } from './redTheme';


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ redTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}