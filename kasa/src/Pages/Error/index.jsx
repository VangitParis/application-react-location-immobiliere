import React from 'react'
import '../../styles/sass/pages/_error.scss'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main className="error">
      <div className="error__404">404</div>
      <h1 className="error__title">
        Oups! La page que vous demandez n'existe pas.
      </h1>

      <Link to="/" className="error__backText">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}
