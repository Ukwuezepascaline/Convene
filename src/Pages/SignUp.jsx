import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUp/SignUpForm";
import styles from "../components/SignUp/SignUp.module.css";

const SignUp = () => {
  return (
    <>
      <section className={styles.signUp}>
        <article className={styles.signUpContent}>
          <div className={styles.signUpSummary}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99999 18.4002L0.799988 22.6002V3.0002C0.799988 1.4602 2.05999 0.200195 3.59999 0.200195H20.4C21.9251 0.200195 23.2 1.47513 23.2 3.0002V15.6002C23.2 17.1253 21.9251 18.4002 20.4 18.4002H4.99999ZM15.85 12.8422C16.8553 11.6798 17.222 10.2446 17.222 8.7262C17.222 6.41444 16.2318 4.22493 13.9933 3.36333C12.6987 2.86508 11.0646 2.86755 9.7695 3.36246C7.60473 4.18971 6.38577 6.4455 6.52599 8.7262C6.52599 10.5322 7.01599 11.9322 7.96799 12.9262C9.01575 13.9543 10.4925 14.5087 11.958 14.4242C12.826 14.4242 13.638 14.2702 14.352 13.9482C15.262 14.5642 15.752 14.9002 15.836 14.9282C16.158 15.1102 16.48 15.2502 16.816 15.3482L17.642 13.7662C17.0047 13.5428 16.4016 13.2318 15.85 12.8422ZM14.072 11.5822C13.4355 11.1003 12.7267 10.7223 11.972 10.4622L11.342 11.7222C11.804 11.8902 12.266 12.1282 12.714 12.4222C12.434 12.5202 12.126 12.5762 11.804 12.5762C10.95 12.5762 10.236 12.2542 9.67599 11.6242C8.467 10.2339 8.46692 7.26063 9.67599 5.8702C10.7974 4.60837 12.9647 4.60789 14.086 5.8702C15.3491 7.29117 15.2966 10.1127 14.072 11.5822Z"
                fill="#8176AF"
              ></path>
            </svg>
            <span>Get unstuck - ask a question!</span>
          </div>
          <div className={styles.signUpSummary}>
            <svg width="26" height="26">
              <path
                d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                fill="#8176AF"
              ></path>
              <path
                opacity=".5"
                d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                fill="#8176AF"
              ></path>
            </svg>
            <span>Save your favorite posts, tags and filters</span>
          </div>
          <div className={styles.signUpSummary}>
            <svg width="26" height="26">
              <path
                d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"
                fill="#8176AF"
              ></path>
            </svg>
            <span>Answer questions and earn reputation</span>
          </div>
        </article>

        <article>
          <div className={styles.signUpForm}>
            <SignUpForm />
          </div>
          <p className={styles.question}>
            Already have an account?{" "}
            <Link to="/login" className={styles.questionLink}> Login</Link>
          </p>
        </article>
      </section>
    </>
  );
};

export default SignUp;
