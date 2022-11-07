import { createTheme } from '@mui/material'; 
import { stateAndNeutral } from './colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00C09B'
    },
    secondary: {
      main: '#8C1AD1',
      strawberryJuice: '#FA2882'
    },
    ...stateAndNeutral,
    gradients: {
      mixOfFlavors: 'linear-gradient(90deg, rgba(253,106,192,1) 0%, rgba(187,0,225,1) 35%, rgba(81,64,214,1) 60%, rgba(0,192,155,1) 100%)'
    }
  }
});