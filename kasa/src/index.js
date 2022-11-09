import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/Router/App'
import Header from '../src/components/Layouts/Header/nav'
import './styles/sass/utils/_mixins.scss'
import Footer from '../src/components/Layouts/Footer'
import 'normalize.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  // RENDER EST UNE METHODE A LAQUELLE ON PASSE NOS ARGUMENTS
 
  <React.StrictMode>
  <BrowserRouter>
      <Header />
      <App />
      <Footer />
  </BrowserRouter>
  </React.StrictMode>
  
)