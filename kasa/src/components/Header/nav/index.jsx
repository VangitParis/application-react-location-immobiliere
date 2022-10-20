import '../../../styles/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo/Group.png'
import vectorA from '../../../assets/logo/vectorA.svg'
//import vectorK from '../../../assets/logo/vectorK.png'
//import vectorS from '../../../assets/logo/vectorS.png'
 
function Header() {
    return (
        <div className='header'>
            <nav>
                <ul className='nav'>
                    <li className='nav-accueil'><Link to="/">Accueil</Link></li>
                    <li className='nav-apropos'><Link to="/apropos">À Propos</Link></li>
                </ul>
            </nav>
            <div className='logo'>
                <div className='group'>
                    <img src ={logo} alt = 'kasa' />
                </div>
                
                <p className='vectorK'>K</p>
                <p className='vectorS'>s</p>
                <p img src ={vectorA} className='vectorA'></p>
            </div> 
        </div>
    )
}

export default Header