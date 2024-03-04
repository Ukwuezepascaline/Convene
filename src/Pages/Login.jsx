import { icon } from "../assets/index";
import styles from "../components/Login/Login.module.css";
// import GoogleButton from "../components/GoogleButton";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className={styles.login}>
      <img src={icon} alt="Logout" className={styles.loginImg} />
      {/* <GoogleButton title="Log in with Google" className={styles.loginBtn} /> */}

      <form className={styles.loginForm}>
        <div className={styles.loginBox}>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.loginBox}>
          <div className={styles.loginPwd}>
            <label>Password</label>
            <span className={styles.forgot}>Forgot password?</span>
          </div>
          <input type="password" name="password" />
        </div>

        <Button title="Log in" className={styles.loginFormBtn} />
      </form>
      <p className={styles.question}>Don&apos;t have an account? <Link to="/sign-up" className={styles.questionLink}>SignUp</Link></p>
    </section>
  );
};

export default Login;
