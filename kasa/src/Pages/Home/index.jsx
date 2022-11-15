import React from 'react'
import Banner from '../../components/Banner'
import { CardsContainer } from '../../components/CardsContainer'
import '../../styles/sass/pages/_home.scss'


function Home() {
  return (
    <main className="_body">
      {/*BANNIERE */}
      <Banner/>
     

      {/*CARD*/}

      <CardsContainer />
    </main>
  )
}

export default Home
