import React from "react";

import logo from '../assets/in.png';
import styles from './Who.module.css';

function Who(){
  return(
    <div>
      <h1 className={styles.WhoTitle}>Qui sont les Pussycat Trolls ?</h1>
      <div className={styles.listContainer}>
        <div className={styles.nameContainer}>
          <a href="https://www.linkedin.com/in/ambrethevenin/" target="_blank" rel="noreferrer">
            <img className={styles.LinkedinLogo} src={logo} alt="LinkedIn logo" />
          </a>
          <p className={styles.WhoLi}>Ambre</p>
        </div>
        <div className={styles.nameContainer}>
          <a href="https://www.linkedin.com/in/charlotte-menard/" target="_blank" rel="noreferrer">
            <img className={styles.LinkedinLogo} src={logo} alt="LinkedIn logo" />
          </a>
          <p className={styles.WhoLi}>Charlotte</p>
        </div>
        <div className={styles.nameContainer}>
          <a href="https://www.linkedin.com/in/m%C3%A9lissa-olas/" target="_blank" rel="noreferrer">
            <img className={styles.LinkedinLogo} src={logo} alt="LinkedIn logo" />
          </a>
          <p className={styles.WhoLi}>Mélissa</p>
        </div>
        <div className={styles.nameContainer}>
          <a href="https://www.linkedin.com/in/sophielepert/" target="_blank" rel="noreferrer">
            <img className={styles.LinkedinLogo} src={logo} alt="LinkedIn logo" />
          </a>
          <p className={styles.WhoLi}>Sophie</p>
        </div>
      </div>
      <h2 className={styles.WhoH2}>Pourquoi ?</h2>
      <p className={styles.WhoText}>Site développé dans le cadre d'un hackathon :</p>
      <p className={styles.WhoText}>24h de code !</p>
      <p className={styles.WhoText}>Un thème : la musique.</p>
    </div>
  )
};

export default Who; 