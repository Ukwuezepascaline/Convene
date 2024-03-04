import GoogleButton from "../GoogleButton";
import styles from "./SignUp.module.css";
import Button from "../Button";

const SignUpForm = () => {
  return (
    <form className={styles.formRegister}>
      <h1>Create your account</h1>
      <p className={styles.formSummary}>
        By clicking &quot;Sign Up&quot;, you agree to our{" "}
        <span className={styles.terms}>terms of services</span> and acknowledge
        you have read our <span className={styles.terms}>privacy policy.</span>
      </p>

      <div className={styles.formContainer}>
        <div className={styles.formLabel}>
          <label>Email</label>
          <input type="email" name="email" className={styles.formInput} />
        </div>

        <div className={styles.formLabel}>
          <label>Password</label>
          <input type="password" name="password" className={styles.formInput} />
          <p className={styles.formSummary}>
            Must contain 8+ characters, including at least 1 letter and 1
            number.
          </p>
        </div>
      </div>

      {/* <button className={styles.formButton}>Sign up</button> */}
      <Button title="Sign up" className={styles.formButton} />
      <GoogleButton title="Sign up with Google" className={styles.formBtnGoogle} />
    </form>
  );
};

export default SignUpForm;
