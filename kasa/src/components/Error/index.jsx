import React from "react";
import '../../styles/Saas/pages/_error.scss'
import { Link } from 'react-router-dom'
//import errorImg from '../../assets/404.png'



export default function Error(){
    //const img404 = <img src={errorImg} alt='error 404'/>
    return(
    
            <main  className="error">
                <div className="error__404">404</div>
                <h1  className="error__title">
                Oups! La page que 
                vous demandez n'existe pas.
                </h1>
               
                <Link to="/"  className="error__backText">Retourner sur la page d’accueil</Link>
                
            </main>
    )
}

