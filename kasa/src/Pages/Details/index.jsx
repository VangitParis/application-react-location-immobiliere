import '../../styles/Saas/pages/_details.scss'
import React from 'react'
import SingleLocation from '../../components/Utils/getSingleLocation'
import Description from '../../components/Utils/SingleLocationDescription'

export default function Details() {
  return (
    <main  className='details__main'>
      <SingleLocation />
      <Description />
    </main>
  )
}
