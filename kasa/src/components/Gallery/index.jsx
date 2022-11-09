import accomodations from '../../datas/locationslist.json'
import Carousel from '../Carousel'
import { useParams } from 'react-router-dom'
import '../../styles/sass/components/_gallery.scss'

export default function Gallery() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  //console.log(locationById.pictures)
  return (
    <>
    <Carousel key={locationById.id} pictures={locationById.pictures} />
    </>
  )
}
