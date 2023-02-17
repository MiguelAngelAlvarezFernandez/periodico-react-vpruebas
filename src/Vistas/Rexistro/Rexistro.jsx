import { useState } from "react"

function Rexistro() {

    let [ nome, setNome ] = useState(" ")

    function manexadorDeInputNome(evento) {
        setNome(evento.target.value);
    }

    let [ email, setEmail] = useState(" ")

    function manexadorDeInputEmail(evento) {
        setEmail(evento.target.value);
    }

    let [Comentario, setComentario] = useState("Deja aquí tu comentario")

    function manexadorDeComentario(evento) {
        setComentario(evento.target.value)
    }

    return (
        <>
        <label>
            Nombre:
            <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
        </label>
        <label>
            Email:
            <input type="email" name="mail" value={email} onInput={manexadorDeInputEmail}/>
            <p>Este é o contido de Email en maiusculas: {email.toUpperCase()}</p>
        </label>
        <label>
            Ayúdanos a mejorar:
            <textarea name="Comentario" cols="30" rows="10" value={Comentario} onInput={manexadorDeComentario}></textarea>
        </label>
        </>
    )
}

export default Rexistro