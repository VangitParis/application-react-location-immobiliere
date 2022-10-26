import accomodations from '../../datas/locationslist.json'
import Carousel from '../Carousel'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import exports from 'react'

export default function SingleLocation() {
  //const Lodging = () => {
  const { id } = useParams()
  //const [locations, setLocations] = useState([]);

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
      {locationById && (
        <div>
          <Carousel 
          key={locationById.id} 
          pictures={locationById.pictures}
          />
          

          
 
        </div>
      )}
    </section>
  )
}
