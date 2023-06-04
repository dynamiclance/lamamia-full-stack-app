import React from 'react';
import Image from 'next/image';


import styles from "./page.module.css";


const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime aperiam tenetur voluptatem omnis eos vel ipsum doloribus eum quasi, perspiciatis velit nesciunt doloremque nisi beatae aliquam! Odio distinctio unde nostrum iure praesentium error. Rerum deleniti consequuntur accusamus adipisci, sapiente quae. Voluptatibus!
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil modi architecto placeat aut! Itaque fugit sed tempora autem optio! Molestias repellat corrupti fugit quaerat odio omnis facere dolore necessitatibus voluptate nihil, voluptates ratione esse quasi velit quia perferendis maxime!
        </p>
      </div>
    </div>
  )
}

export default SingleBlog