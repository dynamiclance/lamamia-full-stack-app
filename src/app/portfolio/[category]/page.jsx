import React from 'react';
import styles from "./page.module.css";
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Work Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dolorem.</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.img} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Work Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dolorem.</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.img} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Work Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dolorem.</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Category