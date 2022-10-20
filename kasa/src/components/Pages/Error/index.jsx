import React from "react";
import img from './404.png'
import '../../../styles/Error.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className="error">
            <div className="D-404">
            <img src={img} alt="erreur 404" className="img" />
            <h1 className="error-h1">
                Oups! La page que vous demandez n'existe pas.
            </h1>
            <p className="error-p"><Link to="/">Retourner sur la page d’accueil</Link></p>
            </div>
        </div>
    )
}

