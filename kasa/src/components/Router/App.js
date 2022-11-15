import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Details from '../../pages/Details'
import Error from '../../pages/Error'

function App() {
  return (
    <Routes>
      {/*Home est à la racine de l'application*/}
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<About />} /> {/*CHEMIN ABSOLU*/}
      {/*CHEMIN dynamique avec l'adresse de l'id correspondant*/}
      <Route path="/details/:id" element={<Details />} />
      {/*CHEMIN dynamique vers une page 404*/}
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default App
