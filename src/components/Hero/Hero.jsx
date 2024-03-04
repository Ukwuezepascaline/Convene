import styles from "./style.module.css";
import { HeroImg } from "../../assets"

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.herotext}>
        <h1 className={styles.mainHeading}>
          Crowd-source questions for a meetup.
        </h1>
        <p className={styles.paragraph}>
          Convene assists meetup organizers in prioritizing <br />
          questions to be answered by allowing users to vote on them.
          <br />
          The most popular question are displayed at the top.
        </p>
      </div>

      <div>
        <img
          src={HeroImg}
          alt="BackgroundImg"
          className={styles.backgroundImage}
        />
      </div>
    </section>
  );
};

export default Hero;
