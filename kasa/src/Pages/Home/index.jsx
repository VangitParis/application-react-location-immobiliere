import React from 'react'
//import Card from '../../components/Card'
import Banner from '../../components/Banner'
import { Gallery }from '../../components/Gallery'
//import Carousel from '../../components/Carousel'
//import Elements from '../../components/Elements'
import '../../styles/Saas/pages/_home.scss'



function Home() {

  return (
   
  <main  className='_body'>
    {/*BANNIERE */}
    <Banner/>
   
    {/*CARD*/}
   
    <Gallery/>
    

  </main>
  )
}


export default Home


