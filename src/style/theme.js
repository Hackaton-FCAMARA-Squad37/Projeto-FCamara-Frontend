import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      mixer: '#00C09B',
      grapeJuice: '#8C1AD1',
      strawberryJuice: 'FA2882',
      state: {
        sucess: '#63C132',
        warning: '#FFBA49',
        info: '#6F7AEC',
        error: '#FF3838'
      },
      neutral: {
        vitamin: '#0A0707',
        coffe: '#161616',
        soda: '#232323',
        milkshake: '#484848',
        tea: '#9B9B9B',
        water: '#F8F8F8'
      },
      mixFlavor: 'linear-gradient(90deg, rgba(253,106,192,1) 0%, rgba(187,0,225,1) 35%, rgba(81,64,214,1) 60%, rgba(0,192,155,1) 100%)'
      
    },
  },
})