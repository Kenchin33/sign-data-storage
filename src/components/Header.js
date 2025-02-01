import React from 'react'
import '../styles/header.css';
import logo from '../img/logo.png'
import instagramLogo from '../img/instagram.png'

const Header = () => {
    return(
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt='Funko Hunter Logo'></img>
            </div>
            <h1 className='site-tittle'>Funko Hunter</h1>
            <div className='instagram-header-link'>
                <a href='https://www.instagram.com/funko.hunter/' target='_blank' rel='noopener noreferrer'>
                    <img src={instagramLogo} alt='Instagram'></img>
                </a>
            </div>
        </header>
    )
}

export default Header
