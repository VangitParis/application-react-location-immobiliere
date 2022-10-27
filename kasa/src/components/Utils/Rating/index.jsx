import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import accomodations from '../../../datas/locationslist.json'
import exports from 'react'
import '../../../styles/Saas/components/_stars.scss'

export default function Rating() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  console.log(locationById)

  return (
    <ul className="star">
      {Array.from(Array(5), (e, index) => {
        if (index < parseInt(locationById.rating)) {
          return (
            <span key={`${locationById.id}-${index}`} className="star--completed">
              <FontAwesomeIcon icon={faStar} />
            </span>
          )
        } else {
          return (
            <span key={`${locationById.id}-${index}`} className="star--noCompleted">
              <FontAwesomeIcon icon={faStar} />
            </span>
          )
        }
      })}
    </ul>
  )
}
