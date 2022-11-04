import React from 'react'
import '../../../../styles/Saas/layouts/_header.scss'
import { Link } from 'react-router-dom'
import logoHeader from '../../../../assets/logoHeader.png'


export default function Header() {
    const logo = <img src={logoHeader} alt='logo kasa'/>
    return (
        <header className='header'>
         
            <Link to='/'  className='header__logo'>
                {logo}
            </Link>
            <nav className='header__nav'>
            <Link  to="/"  className='header__link header__link__accueil'>Accueil</Link>
            <Link  to="/apropos"  className='header__link header__link__apropos'>A Propos</Link>
            </nav>
         
        </header>
    )
}
