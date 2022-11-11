import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { theme } from './style/theme.js'
import '../src/style/reset.css'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Login } from './pages/Login/Login.jsx'
import { SignIn } from './pages/SignIn/SigIn.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <header>
            <Header/>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signin' element={<SignIn/>}/>
            </Routes>
          </main>
          <footer>
            <Footer/>
          </footer>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
