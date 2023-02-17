import Noticias from "../../Components/Noticias/Noticias";

function Principal() {
    return (
      <>
        <h1>VISTA PRINCIPAL</h1>

        <h2>SECCION NACIONAL</h2>
        <Noticias Titulo="Tit.Portada Noticia Nacional 1" Contenido="Contenido.Portada Noticia Nacional 1"/>
        <Noticias Titulo="Tit.Portada Noticia Nacional 2" Contenido="Contenido.Portada Noticia Nacional 2"/>

        <h2>SECCION LOCAL</h2>
        <Noticias Titulo="Tit.Portada Noticia Local 1" Contenido="Contenido.Portada Noticia Local 1"/>
        <Noticias Titulo="Tit.Portada Noticia Local 2" Contenido="Contenido.Portada Noticia Local 2"/>
      </>
    );
  }
  
  export default Principal;