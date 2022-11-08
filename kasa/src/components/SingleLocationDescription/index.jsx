import React from 'react'
import accomodations from '../../datas/locationslist.json'
import { useParams } from 'react-router-dom'
import Dropdowns from '../Collapse'
import Rating from '../Utils/Rating'
import Tags from '../Utils/Tags'
import '../../styles/Saas/components/_singleLocationDescription.scss'
import '../../styles/Saas/main.scss'
import Equipments from '../Equipments'

export default function SingleLocationDescription() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  //console.log(!locationById)

  return (
    <>
      <section className="singleLocation">
        <div className='singleLocation__title"'>
          <h1 className="singleLocation__title__text">{locationById.title}</h1>
          <p className="singleLocation__location">{locationById.location}</p>
        </div>

        <div className="flex-between">
          <Rating />
          <div className="host">
            <p className="host__name">{locationById.host.name} </p>
            <img src={locationById.host.picture} alt="Hébergeur" />
          </div>
        </div>
      </section>

      <section className="singleLocation-tags-dropdowns">
        <div className="singleLocation__tags flex">
          {locationById.tags.map((tag, index) => (
            <Tags key={index} getTag={tag} />
          ))}
        </div>
        <div className='singleLocation-dropdowns'>
        <Dropdowns title="Description" description={locationById.description} />
        <Equipments />
        </div>
      </section>
    </>
  )
}
