import '../styles/App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Locations from './Pages/Locations'
import Header from './Header/nav'
import Error from './Pages/Error'
function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path ='/' element ={<Home />} /> {/*Home est à la racine de l'application*/}
                <Route path ='/apropos' element ={<About />} /> {/*CHEMIN ABSOLU*/}
                <Route path='/logement/:id' element={<Locations />}/> {/*CHEMIN dynamique avec l'adresse de l'id correspondant*/}
                <Route path='/logement/*' element={<About />}/>  {/*CHEMIN dynamique avec n'importe quelle adresse url*/}
                <Route path='/*' element={<Error />}/>  {/*CHEMIN dynamique vers une page 404*/}
                </Routes>
           
    </div>
    )
  }
  
  export default App