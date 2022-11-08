import React from 'react'
import '../../../../styles/Saas/layouts/_header.scss'
import { Link } from 'react-router-dom'
import logoHeader from '../../../../assets/logoHeader.png'
import { useLocation } from "react-router-dom";


export default function Header() {
    
    const location = useLocation()
    const {pathname} = location
    const splitLocation = pathname.split("/")
    const logo = <img src={logoHeader} alt='logo kasa'/>
    return (
       
       
        <header className='header' >
             
            <Link to='/'  className='header__logo'>
                {logo}
            </Link>
        
            <nav className='header__nav'>
                <ul>
            {/*mettre le style des liens à la page actuelle */}
            <li  className={splitLocation[1]==="" ? "active" : ""}>
                <Link  to="/">Accueil</Link></li>

            <li  className={splitLocation[1]==="apropos" ? "active" : ""}>
                <Link to="/apropos">A Propos</Link></li>
            
            </ul>
            </nav>

        </header>

            
  
     
      
     
       
    )
}
