import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages 
import Home from './pages/Home/Home'


// components
import Header from './Components/Header/Header'
import ProductInterface from './pages/app/ProductInterface'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appinterface' element={<ProductInterface />} />
          <Route path='/appinterface/:aiproduct' element={<ProductInterface />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
