//get fontAwesome imports
import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import PropTypes from 'prop-types'
import '../../../styles/sass/components/_collapse.scss'
import '../../../styles/sass/pages/_about.scss'

export default function Dropdowns({ title, description }) {
  const [isOpen, setIsOpen] = useState(true)
  const handleCollapse = (e) => {
    e.preventDefault()
    console.log('collapse click :', e)
  }

  return isOpen ? (
    <div className="dropdown ">
      {/*Dropdowns */}

      <button
        className="dropdown__closed dropdown__flexB"
        onClick={(e) => handleCollapse(e, setIsOpen(false))}
      >
        <h2 className="dropdown__title">{title} </h2>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  ) : (
    <div className="dropdown dropdown__open">
      <nav className="dropdown__large">
        <button
          className="dropdown__open dropdown__flexB"
          onClick={(e) => handleCollapse(e, setIsOpen(true))}
        >
          <h2 className="dropdown__title">{title} </h2>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>

        <ul className="dropdown__open dropdown__open__description securite">
          <li className="dropdown__open__text">{description}</li>
        </ul>
      </nav>
    </div>
  )
}

Dropdowns.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
  title: PropTypes.string.isRequired,
}
