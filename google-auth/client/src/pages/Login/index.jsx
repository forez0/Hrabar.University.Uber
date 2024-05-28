import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    return (
        <div className={styles.container}>
                <h1 className={styles.heading}>Log in</h1>
                <div className={styles.form_container}>
                    <div className={styles.left}>
                        <img className={styles.img} src="./images/login.jpeg" alt="login" />
                    </div>
                    <div className={styles.right}>
                       <h2 className={styles.from_heading}>Log in Form</h2>
                       <input type="text" className={styles.input} placeholder="email"/>
                       <input type="text" className={styles.input} placeholder="password"/>
                       <button className={styles.btn}>Log in</button>
                       <p className={styles.text}>or</p>
                       <button className={styles.google_btn} onClick={googleAuth}>
                        <img src="./images/google_icon.png" alt="google icon" />
                        <span>Sign in with Google</span>
                       </button>
                       <p className={styles.text}>
                        Welcome to Frogger <Link to="/signup">Sign Up</Link>
                       </p>
                    </div>
                </div>
        </div>
    );
}

export default Login;