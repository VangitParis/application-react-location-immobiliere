import { useParams } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import accomodations from '../../../datas/locationslist.json'
import '../../../styles/sass/components/_stars.scss'

export default function Rating() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  //console.log(locationById.rating)

  return (
    <div className="star">
      {Array.from(Array(5), (e, index) => {
        if (index < parseInt(locationById.rating)) {
          return (
            <span
              key={`${locationById.id}-${index}`}
              className="star__completed"
            >
              <FontAwesomeIcon icon={faStar} />
            </span>
          )
        } else {
          return (
            <span
              key={`${locationById.id}-${index}`}
              className="star__noCompleted"
            >
              <FontAwesomeIcon icon={faStar} />
            </span>
          )
        }
      })}
    </div>
  )
}
