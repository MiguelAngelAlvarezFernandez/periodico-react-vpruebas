import { useState } from "react";
import Principal from "../../Vistas/Principal/Principal";
import Local from "../../Vistas/Local/Local";
import Nacional from "../../Vistas/Nacional/Nacional";
import Rexistro from "../../Vistas/Rexistro/Rexistro";
import Login from "../../Vistas/Login/Login";
import ButtonLogin from "../ButtonLogin/ButtonLogin"

function Navegador(props) {

    return (
      <>
      <nav>
        <ul>
          <li>
            <a id="Principal" onClick={props.manexadorClick}>Principal</a>
          </li>
          <li>
            <a id="Local" onClick={props.manexadorClick}>Local</a>
          </li>
          <li>
            <a id="Nacional" onClick={props.manexadorClick}>Nacional</a>
          </li>
          <li>
          <a id="Registro" onClick={props.manexadorClick}>Registro</a>
          </li>
        </ul> 
      </nav>

      

      {props.vista==="Principal" && <Principal/>}
      {props.vista==="Local" && <Local/>}
      {props.vista==="Nacional" && <Nacional/>}
      {props.vista==="Registro" && <Rexistro/>}
      {props.vista==="Login"&&<Login/>}
      </>
    );
  }
  
  export default Navegador;