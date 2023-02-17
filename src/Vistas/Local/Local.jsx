import Noticias from "../../Components/Noticias/Noticias";

function Local() {
    return (
      <>
        <h1>VISTA DE LOCAL</h1>

        <h2>NOTICIAS LOCAL</h2>
        <Noticias Titulo="Titulo Local 1" Contenido="Contenido Noticia Local 1"/>
        <Noticias Titulo="Titulo Local 2" Contenido="Contenido Noticia Local 2"/>
      </>
    );
  }
  
  export default Local;