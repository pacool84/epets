import React from 'react'
import '../assets/styles/Header.css'
import Logo from '../assets/statics/epetslogo.png'

const Header = () => (
    <header>
        <img className="logo" src={Logo} />
        <nav>
            <ul className="nav-links">
            <a href='/'>
                <li>Juguetes</li>
            </a>
            <a href='/'>
                <li>Comida</li>
            </a>
            <a href='/'>
                <li>Ropa</li>
            </a href='/'>
            <a>
                <li>Estetica</li>
            </a>
            <a href='/'>
                <li>Consulta Medica</li>
            </a>
        </ul>
        </nav>
        
    </header>
)

export default Header
