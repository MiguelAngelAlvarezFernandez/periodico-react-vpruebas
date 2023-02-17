import './App.css';
import Encabezado from './Components/Encabezado/Encabezado';
import Navegador from './Components/Navegador/Navegador';
import { useState } from 'react';

function App() {

  const [vista, setVista] = useState("Principal")

  function manexadorClick (evento){
    setVista(evento.target.id)
  }
  return (
    <>
      <Encabezado manexadorClick={manexadorClick}/>

      <p>NAVEGADOR</p>
      <Navegador vista={vista} setVista={setVista} manexadorClick={manexadorClick}/>
      
    </>
  );
}

export default App;
