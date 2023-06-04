import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';


const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustration' className={styles.itemBox}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href='/portfolio/application' className={styles.itemBox}>
          <span className={styles.title}>Application</span>
        </Link>

        <Link href='/portfolio/web' className={styles.itemBox}>
          <span className={styles.title}>Web Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio