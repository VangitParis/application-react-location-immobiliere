//get fontAwesome imports
import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Saas/components/_collapse.scss';



export default function Dropdowns({title, description}){
    const [isOpen, setIsOpen] = useState(true)
    description = Array.isArray(description) ? description : [description]

    return isOpen ? (

        <section  className='dropdown'>{/*Dropdowns */}

            <button  className='dropdown__closed dropdown__title' 
                     onClick={()=> setIsOpen(false)}
            >
                {title} 
                <FontAwesomeIcon icon={faChevronDown} />
            </button>

           

        </section>
    ) : (
		<section className='dropdown dropdown__open' >

			<button
				className='dropdown__open dropdown__title '
				onClick={() => setIsOpen(true)}
			>
				 {title}  
                <FontAwesomeIcon icon={faChevronUp}/>
			</button>

            <ul  className='dropdown__open dropdown__open__description'>
                <p  className='dropdown__open__text'>
                    {description}
                </p>
           </ul>
		</section>
	)
}

Dropdowns.propTypes={
description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
title: PropTypes.string.isRequired,
}
