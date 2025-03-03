import React from 'react'
import styles from './Techstack.module.css';
import html from '../Assests/html.svg';
import css from '../Assests/css.svg';
import scss from '../Assests/sass.svg';
import Js from '../Assests/js.svg';
import react from '../Assests/react.svg';
import angular from '../Assests/angular js.svg';
import php from '../Assests/php.svg';
import node from '../Assests/nodejs.svg';
import python from '../Assests/python.svg';
import typescript from '../Assests/typescript.svg';
import sql from '../Assests/sql.svg';
import mongo from '../Assests/mongo.svg';
import express from '../Assests/express.svg';
import git from '../Assests/git.svg'







const TechStack = () => {
    return (
        <div>
            <div className={styles.Ctnr}>
                <div className={styles.HdngCtnr}>
                    <h1 className="heading">Tech Stack</h1>
                </div>

                <div className={styles.gridCntr}>
                    <div className={styles.teckstack}>
                        <img src={html} alt='html' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={css} alt='css' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={scss} alt='js' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={Js} alt='js' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={react} alt='react' />
                    </div>


                    <div className={styles.teckstack}>
                        <img src={angular} alt='angular' />
                    </div>


                    <div className={styles.teckstack}>
                        <img src={php} alt='php' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={node} alt='node' />
                    </div>


                    <div className={styles.teckstack}>
                        <img src={python} alt='py' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={typescript} alt='ts' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={sql} alt='sql' />
                    </div>


                    <div className={styles.teckstack}>
                        <img src={mongo} alt='mongo' />
                    </div>

                    <div className={styles.teckstack}>
                        <img src={express} alt='ex' />
                    </div>


                    <div className={styles.teckstack}>
                        <img src={git} alt='git' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack