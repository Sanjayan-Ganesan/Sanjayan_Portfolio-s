import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {

    return (
        <div id='contacts' className={styles.contactCtnr}>
            <div className={styles.cntheading}>
                <h1>Contact Me</h1>
            </div>
            <div className={styles.contactWrapper}>
                <div className={styles.contactList}>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faLocationDot} size='lg' className={styles.SocialIcon} />
                        <p>Bangalore,India</p>
                    </div>

                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faPhone} size='lg' className={styles.SocialIcon} />
                        <p>+918248086622</p>
                    </div>

                    <div className={styles.contactItem}>
                        <a href="mailto:sanjayan1308@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size='lg' className={styles.SocialIcon} />
                        </a>
                        <p>sanjayan1308@gmail.com</p>
                    </div>

                    <div className={styles.contactItem}>
                            <a href='https://www.linkedin.com/in/sanjayan-ganesan/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} size='lg' className={styles.SocialIcon} />
                            </a>
                            <p>@ sanjayan-ganesan</p>
                    </div>

                    <div className={styles.contactItem}>
                            <a href='https://github.com/Sanjayan-Ganesan' target='_blank'><FontAwesomeIcon icon={faSquareGithub} size='lg' className={styles.SocialIcon} /></a>
                            <p>@ Sanjayan-Ganesan</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact