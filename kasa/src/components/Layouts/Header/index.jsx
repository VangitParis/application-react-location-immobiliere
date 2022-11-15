import React from 'react'
import '../../../styles/sass/layouts/_header.scss'
import { Link } from 'react-router-dom'
import logoHeader from '../../../assets/logoHeader.png'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  const logo = <img src={logoHeader} alt="logo kasa" />
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        {logo}
      </Link>
      <nav className="header__nav">
        <ul>
          {/*splitlocation permet de trouver sur quelle page se trouve le lien 
          afin d'appliquer le style avec la className : active*/}
          <li className={splitLocation[1] === '' ? 'active' : ''}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={splitLocation[1] === 'apropos' ? 'active' : ''}>
            <Link to="/apropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
