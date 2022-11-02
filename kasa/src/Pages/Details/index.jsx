import '../../styles/Saas/pages/_details.scss'
import React from 'react'
import SingleLocation from '../../components/getSingleLocation'
import Description from '../../components/SingleLocationDescription'
import { useParams } from 'react-router-dom'
import accomodations from '../../datas/locationslist.json'
import Error from '../Error'

export default function Details() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)

 return !locationById ? (
    <>
     <Error/>
    </>
 ):(
    <main className="details__main">
    <SingleLocation />
    <Description />
  </main>
  )
    

  
}
