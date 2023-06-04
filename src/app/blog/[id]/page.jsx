import React from 'react';
import Image from 'next/image';
import {notFound} from "next/navigation";


import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!res.ok) {
  //  return "not found";
   return notFound();
}

return res.json();

}

const SingleBlog = async ({params}) => {

  const post = await getData(params.id);
  console.log(post)


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>
          {post.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Cerlin</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2163950/pexels-photo-2163950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        {post.body}
        </p>
      </div>
    </div>
  )
}

export default SingleBlog