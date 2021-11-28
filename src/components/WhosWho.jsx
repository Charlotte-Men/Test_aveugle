import React from "react";

import styles from './Who.module.css';

function Who(){
  return(
    <div>
      <h1 className={styles.WhoTitle}>Qui sont les Pussycat Trolls ?</h1>
      <ul>
        <li className={styles.WhoLi}><span className={styles.WhoSpan}>Ambre</span></li>
        <li className={styles.WhoLi}><span className={styles.WhoSpan}>Charlotte</span></li>
        <li className={styles.WhoLi}><span className={styles.WhoSpan}>Melissa</span></li>
        <li className={styles.WhoLi}><span className={styles.WhoSpan}>Sophie</span></li>
      </ul>
      <h2 className={styles.WhoH2}>Pourquoi ?</h2>
      <p className={styles.WhoText}>Site développé dans le cadre d'un hackathon :</p>
      <p className={styles.WhoText}>24h de code !</p>
      <p className={styles.WhoText}>Un thème : la musique.</p>
    </div>
  )
};

export default Who; 