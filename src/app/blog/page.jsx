import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
  
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
          <Link href={'/blog/' + post.id}>
            <div className={styles.imgContainer}>
              <Image src="https://images.pexels.com/photos/2163950/pexels-photo-2163950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={200} className={styles.img} alt='blog img' />
            </div>
          </Link>
          <div className={styles.content}>
            <Link href={'/blog/' + post.id}><h1 className={styles.title}>{post.title}</h1></Link>
            <p className={styles.des}>{post.body}</p>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default Blog