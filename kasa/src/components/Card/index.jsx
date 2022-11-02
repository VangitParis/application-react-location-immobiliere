import React from "react"
import PropTypes from 'prop-types'
import '../../styles/Saas/components/_card.scss'
import { Link } from "react-router-dom"




export default function Card({ title, cover, id}) {

    return(
        //article : figure = img + figcaption
       
        <article  className="Thumb">  
         
            <Link to={`/details/${id}`}>
               
                <figure  className='Thumb__Rectangle2'>
               
                    <img src= {cover}  alt='logements'  className="Thumb__imgLogement"/>
                    
                    <figcaption  className="Thumb__titleLocation">
                        <h2>{title}</h2>
                    </figcaption>
                </figure>
            </Link>
           
        </article>
     
     
       

    )
  }

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover : PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  Card.defaultProps = {
    title: '',
    cover: '',
  }