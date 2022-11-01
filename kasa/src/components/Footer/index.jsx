import React from 'react'
import '../../styles/Saas/layouts/_footer.scss'
import logos from '../../../src/assets/LOGO.svg'

export default function Footer() {
  const logo = <img src={logos} alt="Kasa Logo" />
  return (
    <footer>
      <div className="footer">
        {logo}
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
