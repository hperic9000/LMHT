import { useState } from 'react'
import Logo from '../assets/Logo.png'

function NavBar({setPage}) {

    const go = (page) => (e) => {
        e.preventDefault()
        setPage(page)
    }

//Leave this open for now, will add routing later
//also need to add logo and folding button for mobile view, and styling for the navbar
  return (
    <>
      <nav className="navbar">
      <a className="brand" href="/" onClick={go('home')}>
        <img src={Logo} alt="Let Me Hit That — Nightlife Vending" />
      </a>

      <ul className="navLinks">
        <li><a href="/about" onClick={go('about')}>About</a></li>
        <li><a className="navCta" href="/contact" onClick={go('contact')}>Work with me</a></li>
      </ul>
    </nav>
    </>    
  )
}

export default NavBar