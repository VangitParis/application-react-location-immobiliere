import '../../../styles/Saas/components/_equipments.scss'
import { useParams } from 'react-router-dom'
import accomodations from '../../../datas/locationslist.json'
import Dropdowns from '../../Collapse'


export default function Equipments() {
  const { id } = useParams()
  const locationById = accomodations.find((location) => location.id === id)
  console.log(locationById)


  return (
    <Dropdowns
      title="Équipements"
      description=
      {(locationById.equipments).map((equipment,index)=>(
       <p key={index} className='equipments'>
        {equipment}
       </p>
  ))}

  />
  
      )
    }
  
         
