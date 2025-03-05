import React from 'react';
import styles from './Hero.module.css';
import hero from '../Assests/Software_Eng.jpeg';

const Hero = () => {
    const downloadResume = () => {
        window.open('https://drive.google.com/file/d/1-5CXNcfwgaxYP9ac1ACVavo0l6fl7Yos/view?usp=sharing', '_blank');
    };

return (
    <div>
        <div className={styles.heroCtnr}>
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>Hi, I'm Sanjayan</h1>
                    <p>
                        A Full Stack Developer with 2.5 years of experience building dynamic web applications. Skilled in React, Angular, and backend technologies, I craft seamless user experiences. Let’s build something amazing together!
                    </p>
                    <div className={styles.btnCtnr}>
                        <button onClick={downloadResume} className={styles.contactBtn}>Check Resume</button>
                    </div>
                </div>
                <div className={styles.heroImgCtnr}>
                    <img src={hero} alt="Hero" className={`${styles.heroImg} ${styles.animateHeroImg}`} />
                </div>
            </div>
        </div>
    </div>
)
}

export default Hero