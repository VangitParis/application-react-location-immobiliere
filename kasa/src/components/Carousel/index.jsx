import '../../styles/Saas/components/_carousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Proptypes from 'prop-types'
import { useState } from 'react';





  
export default function Carousel({pictures}){

  
  const [item, setItem]=useState(0)
  return(
        <div className="carousel">

             <button  className="carousel__button carousel__button__Left" 
                      onClick={()=>{
                        item === 0 ? setItem(pictures.length -1) : setItem(item-1)
                      }}
                      //item === 0 ? setItem (pictures.length -1) : setItem(item-1)
                      >
                        <FontAwesomeIcon icon={faChevronLeft}/>
                      </button>
                    
                      <img 
                        src={pictures[item]}
                        alt= 'appartement à louer'
                        className='carousel__img'/>
                    
              
              <button
                        className="carousel__button carousel__button__Right"
                        onClick={()=>{
                        item === pictures.length -1 ? setItem(0) : setItem (item+1)
                        //item === pictures.length -1 ? setItem(0) : setItem (item+1)
                        }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
              </button>
             
             
     </div>
        
                              
  )}
              
Carousel.propTypes ={
  pictures : Proptypes.oneOfType([ Proptypes.string,Proptypes.array ]).isRequired,
 
}