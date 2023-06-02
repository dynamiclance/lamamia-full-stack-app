import React from 'react';
import Image from 'next/image';

import styles from "./page.module.css";
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            className={styles.img}
            alt="contact us"
          />
        </div>
        <div className={styles.formContainer}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='text' placeholder='Email' className={styles.input} />
          <textarea 
            className={styles.textarea} 
            placeholder='message'
            cols="30" 
            rows="10">
            </textarea>
            <Button url="#" text="Send"/>
        </div>
      </div>
    </div>
  )
}

export default Contact