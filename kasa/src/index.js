import * as React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './components/Router/App'
import { createGlobalStyle } from 'styled-components'
import Header from '../src/components/Header/nav'
import './styles/Saas/utils/_mixins.scss'
import Footer from '../src/components/Footer'

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Montserrat', sans-serif;
  font-weight:500;
  font-style: normal;
  width:100%;
}

`
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render( // RENDER EST UNE METHODE A LAQUELLE ON PASSE NOS ARGUMENTS
  <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
  
);
