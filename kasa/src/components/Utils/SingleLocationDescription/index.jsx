import React from 'react'
import accomodations from '../../../datas/locationslist.json'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import exports from 'react'
import Dropdowns from '../../Collapse'
import Rating from '../Rating'

export default function SingleLocationDescription() {
  const { id } = useParams()
  const getData = () => {
    exports.get = (res) => {
      accomodations
        .find(res.params.id)
        .then((locations) => {
          res.json(locations)
        })
        .catch((err) => res.status(400).send(err))
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const locationById = accomodations.find((location) => location.id === id)
  console.log(locationById)
  return (
    <section>
      <article className="singleLocation">
        <h1 className="singleLocation__title">{locationById.title}</h1>
        <p className="singleLocation__location">{locationById.location}</p>
        <div className="singleLocation__tags">{locationById.tags}</div>
        <Rating />
        <div className="host">
          <p>{locationById.host.name}</p>
          <img src={locationById.host.picture} alt="Hébergeur" />
        </div>
      </article>

      <section>
        <h2>
          {' '}
          <Dropdowns
            title="Descritpion"
            description={locationById.description}
          />
        </h2>

        <h2>
          {' '}
          <Dropdowns
            title="Equipements"
            description={locationById.equipments}
          />
        </h2>
      </section>
    </section>
  )
}
