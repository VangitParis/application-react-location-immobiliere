import accomodations from '../../../datas/locationslist.json'
import Carousel from '../../Carousel'
import { useParams } from 'react-router-dom'
import '../../../styles/Saas/components/_getSingleLocaton.scss'

export default function SingleLocation() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  console.log(locationById)

  return (
    <section>
      <Carousel key={locationById.id} pictures={locationById.pictures} />
    </section>
  )
}
