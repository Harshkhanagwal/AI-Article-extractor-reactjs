import React from 'react'

import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/Aboutsection/About'
import Products from '../../Components/Productsection/Products'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Herosection/>
        <About/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home