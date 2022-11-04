import { extendTheme } from '@chakra-ui/react'
import { neutral, state } from './colors'

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      mixFlavor: 'linear-gradient(90deg, rgba(253,106,192,1) 0%, rgba(187,0,225,1) 35%, rgba(81,64,214,1) 60%, rgba(0,192,155,1) 100%)',
      mixer: '#00C09B',
      grapeJuice: '#8C1AD1',
      strawberryJuice: 'FA2882',
      ...state,
      ...neutral
    },
  },
  fonts: {
    body:  'Raleway, sans-serif'
  }
})