import React from 'react'

import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/Aboutsection/About'
import Products from '../../Components/Productsection/Products'
import Footer from '../../Components/Footer/Footer'
import Demovideo from '../../Components/Demovideo/Demovideo'

const Home = () => {
  return (
    <>
        <Herosection/>
        <About/>
        <Demovideo/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home