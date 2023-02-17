import ButtonLogin from "../ButtonLogin/ButtonLogin";
import LogoMarca from "./LogoMarca.jpg"
import styles from "./Encabezado.module.css"

function Encabezado(props) {
    return (
      <header className={styles.encabezado}>
        <img className={styles.logoMarca} src={LogoMarca} alt="Logo Marca"/>
        <h1 className={styles.diarioName}>DIARIO MARCA</h1>
        <ButtonLogin manexador={props.manexadorClick}/>
      </header>
    );
  }
  
  export default Encabezado;