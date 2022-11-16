import React from 'react'
import accomodations from '../../datas/locationslist.json'
import { useParams } from 'react-router-dom'
import Dropdowns from '../../components/Collapse/Dropdowns'
import Rating from '../Utils/Rating'
import Tags from '../Utils/Tags'
import '../../styles/sass/components/_singleLocation.scss'
import '../../styles/sass/main.scss'
import Equipments from '../../components/Collapse/Equipments'

export default function SingleLocation() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  //console.log(locationById)

  return (
    <>
      {/*singleLocation représente un seul logement sur la page Détails*/}
      <section className="singleLocation">
        {/*Titre et Lieu du logement */}
        <div className="singleLocation__title">
          <h1 className="singleLocation__title__text">{locationById.title}</h1>
          <p className="singleLocation__location">{locationById.location}</p>
        </div>
        <div className="divRatingHost">
          {/*Ajouter les icones stars ici */}
          <Rating />
          {/*Ajouter l'hébergeur et ses données ici = name et pictures*/}
          <div className="host">
            <p className="host__name">{locationById.host.name} </p>
            <img src={locationById.host.picture} alt="Hébergeur" />
          </div>
        </div>
        {/*Mapper les tags du logement actuel et les récupérer */}
        <div className="singleLocation__tags flex">
          {locationById.tags.map((tag, index) => (
            <Tags key={index} Tag={tag} />
          ))}
        </div>
      </section>
      <section className="singleLocation-dropdowns">
        {/*Ajouter le collapse dropdown*/}
        <Dropdowns title="Description" description={locationById.description} />
        {/*Ajouter le collapse equipments */}
        <Equipments />
      </section>
    </>
  )
}
