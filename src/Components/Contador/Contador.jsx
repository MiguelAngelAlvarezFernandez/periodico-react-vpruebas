import { useState } from "react";

function Contador() {
    let [contador, setContador] = useState (0) // useState es un hook de React y esto es una desestructuración de un array
    function incrementa() {setContador(contador+1)} 

    return (
      <>
        <p>Total: {contador}</p>
        <button onClick={incrementa}>Suma</button>
      </>
    );
  }
  
  export default Contador;

  //Todo este código lo que hace es crear un contador que cada vez que pulsamos un botón incrementa el contador en 
  //una unidad.