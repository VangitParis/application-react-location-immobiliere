import React from 'react'
import '../../../styles/sass/layouts/_footer.scss'
import '../../../styles/sass/pages/_about.scss'
import logos from '../../../assets/LOGO.svg'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  const logo = <img src={logos} alt="Kasa Logo" />

  return splitLocation[1] ? (
    <footer
      className={
        splitLocation[1] === 'details' || 'about' 
          ? 'footerDetails footerAbout footerError'
          : ''
      }
    >
      <div className="footerLogo">{logo}</div>
      <p className="footerText">© 2020 Kasa. All rights reserved</p>
    </footer>
  ) : (
    <footer className={splitLocation[1] === '' ? 'footerHome ' : ''}>
      <div className="footerLogo">{logo}</div>
      <p className="footerText">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
