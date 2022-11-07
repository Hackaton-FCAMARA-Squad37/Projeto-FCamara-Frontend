import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  </React.StrictMode>
)
