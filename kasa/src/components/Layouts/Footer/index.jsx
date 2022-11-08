import React from 'react'
import '../../../styles/Saas/layouts/_footer.scss'
import '../../../styles/Saas/pages/_about.scss'
import logos from '../../../assets/LOGO.svg'


export default function Footer() {

  const logo = <img src={logos} alt="Kasa Logo" />

  return (
<footer className='footerFlex'>
    <div className="footer" >
       
      
        {logo}
        <p>© 2020 Kasa. All rights reserved</p>
    
      
   
    </div>
    </footer>
  )
}
