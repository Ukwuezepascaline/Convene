/* eslint-disable react/prop-types */
import styles from "../components/SignUp/SignUp.module.css";
import { google } from "../assets/index";

const GoogleButton = ({ title, className }) => {
  return (
    <button className={`${styles.formBtnGoogle} ${className}`}>
        <img src={google} alt="Google" />
        <span>{title}</span>
      </button>
  )
}

export default GoogleButton;