/* eslint-disable react/prop-types */
import styles from "./SignUp/SignUp.module.css";

const Button = ({ title, className }) => (
  <button className={`${styles.formButton} ${className}`}>{title}</button>
);

export default Button;
