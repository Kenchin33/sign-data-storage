import React, { Component } from 'react'
import './styles/header.css';

const Header = () => {
    return(
        <header className='header'>
            <div className='logo'>
                <img src='./img/logo.png' alt='Funko Hunter Logo'></img>
            </div>
            <h1 className='site-tittle'>Funko Hunter</h1>
            <div className='instagram-header-link'>
                <a href='https://www.instagram.com/funko.hunter/' target='_blank' rel='noopener noreferrer'>
                    <img src='./img/instagram.png' alt='Instagram'></img>
                </a>
            </div>
        </header>
    )
}

export default Header
