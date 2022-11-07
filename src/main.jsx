import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { theme } from './style/theme.js'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </ThemeProvider>
    
  </React.StrictMode>
)
