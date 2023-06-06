import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';


export const metadata = {
  title: 'Blog Page',
  description: 'All Blog Post Together',
};
 


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
} 

const Blog = async () => {

  const posts = await getData();

  return (
    <div className={styles.container}>
      {
        posts.map((post) => (
          <div className={styles.blogContainer} key={post.id}>
          <Link href={'/blog/' + post._id}>
            <div className={styles.imgContainer}>
              <Image src={post.img} width={400} height={200} className={styles.img} alt='blog img' />
            </div>
          </Link>
          <div className={styles.content}>
            <Link href={'/blog/' + post._id}><h1 className={styles.title}>{post.title}</h1></Link>
            <p className={styles.des}>{post.desc}</p>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default Blog