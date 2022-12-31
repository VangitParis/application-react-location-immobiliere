import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Details from '../../Pages/Details'
import Error from '../../Pages/Error'

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
