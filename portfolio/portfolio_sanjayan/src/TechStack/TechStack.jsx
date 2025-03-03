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
                    {[
                        { src: html, alt: 'html' },
                        { src: css, alt: 'css' },
                        { src: scss, alt: 'scss' },
                        { src: Js, alt: 'js' },
                        { src: react, alt: 'react' },
                        { src: angular, alt: 'angular' },
                        { src: php, alt: 'php' },
                        { src: node, alt: 'node' },
                        { src: python, alt: 'python' },
                        { src: typescript, alt: 'typescript' },
                        { src: sql, alt: 'sql' },
                        { src: mongo, alt: 'mongo' },
                        { src: express, alt: 'express' },
                        { src: git, alt: 'git' }
                    ].map((tech, index) => (
                        <div
                            key={index}
                            className={`${styles.teckstack} ${styles.slideIn}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img src={tech.src} alt={tech.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack