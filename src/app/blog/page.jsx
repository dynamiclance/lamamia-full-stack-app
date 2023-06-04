import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogContainer}>
        <Link href="/blog/tesId">
          <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/2163950/pexels-photo-2163950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={200} className={styles.img} />
          </div>
        </Link>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.des}>Description</p>
        </div>
      </div>

      <div className={styles.blogContainer}>
        <Link href="/blog/tesId">
          <div className={styles.imgContainer}>
            <Image src="https://images.pexels.com/photos/2163950/pexels-photo-2163950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={200} className={styles.img} />
          </div>
        </Link>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.des}>Description</p>
        </div>
      </div>
    </div>
  )
}

export default Blog