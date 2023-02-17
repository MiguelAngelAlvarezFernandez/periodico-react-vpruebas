import styles from "./ButtonLogin.module.css"

function ButtonLogin (props) {
    return(
        <>
        <button className={styles.login} id="Login" onClick={props.manexador}>Login</button>
        </>
    );
}

export default ButtonLogin;