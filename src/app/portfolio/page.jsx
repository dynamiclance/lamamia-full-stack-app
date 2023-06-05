import React from 'react';
import styles from "./page.module.css";
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
  description: 'Find all of our latest work',
};
 


const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustrations' className={styles.itemBox}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.itemBox}>
          <span className={styles.title}>Application</span>
        </Link>

        <Link href='/portfolio/websites' className={styles.itemBox}>
          <span className={styles.title}>Web Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio