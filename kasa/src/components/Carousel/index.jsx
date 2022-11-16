import '../../styles/sass/components/_carousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Proptypes from 'prop-types'
import { useState } from 'react'

export default function Carousel({ pictures }) {
  /*utilise la props pictures pour boucler dessus */
  const [item, setItem] = useState(0)

  return pictures.length > 1 ? (
    <section className="carousel">
      {/*si l'utilisateur clique sur la flèche gauche: item = O et 
       on retourne à la dernière img avec pictures.length-1 = item-1*/}
      <button
        className="carousel__button carousel__button__Left"
        onClick={() => {
          item === 0 ? setItem(pictures.length - 1) : setItem(item - 1)
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        {/*si le logement ne contient qu'une seule image on reste sur item*/}
      </button>
      <img
        src={pictures[item]}
        alt="appartement à louer"
        className="carousel__img"
      />
      {/*A chaque changement d'image, on ajoute la pagination qui boucle sur pictures.length 
      et on commence à item+1*/}
      <p className="carousel__bulletpoint">
        {item + 1}/{pictures.length}
      </p>
      {/*si l'utilisateur clique sur la flèche droite: item = -1 et 
       on avance l' img avec pictures.length+1 =item+1*/}
      <button
        className="carousel__button carousel__button__Right"
        onClick={() => {
          item === pictures.length - 1 ? setItem(0) : setItem(item + 1)
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  ) : (
    <img
      src={pictures[item]}
      alt="appartement à louer"
      className="carousel__img"
    />
  )
}

Carousel.propTypes = {
  pictures: Proptypes.oneOfType([Proptypes.string, Proptypes.array]).isRequired,
}
