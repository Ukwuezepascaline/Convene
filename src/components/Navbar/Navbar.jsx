import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants/index";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.navbarImg} />
      </Link>
      <ul className={styles.navbarLinks}>
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className={styles.navbarBtn}>
        <Link
          to="/sign-up"
          className={`${styles.navbarBtnSignUp} ${styles.btnDefault}`}
        >
          Sign Up
        </Link>
        <Link to="/login" className={`${styles.navbarBtnLogin} ${styles.btnDefault}`}>
          Login As User
        </Link>

        <Link
          to=""
          className={`${styles.navbarBtnSignUp} ${styles.btnDefault}`}
        >
          Login As Admin
        </Link>
      </div>
      {/* mobile menu */}
      <div className={styles.mobileMenu}>
        <img
          src={toggle ? close : menu}
          alt=""
          className={styles.mobileMenuImg}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={styles.mobileMenu}
          style={{ display: toggle ? "flex" : "none" }}
        >
          <ul className={styles.mobileMenuLinks}>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
            <div className={styles.mobileBtn}>
              <button
                className={`${styles.navbarBtnSignUp} ${styles.btnDefault}`}
              >
                <Link to="/sign-up">Sign Up</Link>
              </button>
              <button
                className={`${styles.navbarBtnLogin} ${styles.btnDefault}`}
              >
                Login As User
              </button>
              <button
                className={`${styles.navbarBtnSignUp} ${styles.btnDefault}`}
              >
                Login As Admin
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
