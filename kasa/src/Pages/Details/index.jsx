import '../../styles/sass/pages/_details.scss'
import React from 'react'
import Gallery from '../../components/Gallery'
import { useParams } from 'react-router-dom'
import accomodations from '../../datas/locationslist.json'
import Error from '../Error'
import SingleLocation from '../../components/SingleLocation'

export default function Details() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)

  return !locationById ? (
    <>
      <Error />
    </>
  ) : (
    <main className="details__main ">
      <Gallery />
      <SingleLocation />
    </main>
  )
}
