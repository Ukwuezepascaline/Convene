import styles from "./style.module.css"
 import BackgroundImg from "./assets/BackgroundImg.jpg"

const Hero = () => {
    return (
        <section>
            <div className={styles.herotext}>
        <h1 className={styles.mainHeading}>
            Crowd-source questions for a meetup.
        </h1>
        <p className={styles.paragraph}>
            Convene assists meetup organisers in prioritising <br />
             questions to be answered by allowing users to vote on them.<br />
             The most popular question are displayed at the top.
        </p>
        </div>
        
        <div>
           <img src={BackgroundImg} alt="BackgroundImg" className="background-image"/>
            
           </div> 

        
        
        </section>




    );
};

export default Hero;