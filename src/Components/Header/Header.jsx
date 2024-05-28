import React from 'react'
import './Header.css'

import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <header className='main'>
        <nav className="container navbar w100">
            <a href="/"><span className="logo">TexkEvoke AI</span></a>
            <a href="/"><span className="headericon"><FaGithub /></span></a>
        </nav>
    </header>
    </>
  )
}

export default Header