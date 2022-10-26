import {Routes, Route} from 'react-router-dom'


import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Details from '../../Pages/Details'
import Error from '../Error'

function App() {
    return (
        
            <Routes>
                <Route path ='/' element ={<Home />} /> {/*Home est à la racine de l'application*/}
                <Route path ='/apropos' element ={<About />} /> {/*CHEMIN ABSOLU*/}
                <Route path='/details/:id' element={<Details />}/> {/*CHEMIN dynamique avec l'adresse de l'id correspondant*/}
                <Route path='/*' element={<Error />}/>  {/*CHEMIN dynamique vers une page 404*/}
            </Routes>
   
        
    
    )
  }
  
  export default App