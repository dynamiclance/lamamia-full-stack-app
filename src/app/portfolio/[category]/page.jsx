import React from 'react';
import styles from "./page.module.css";
import Button from '@/components/Button/Button';
import Image from 'next/image';
import {items} from "./data";
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat]

  if(data) {
    return data
  }

  return notFound();
}

const Category = ({params}) => {

  const categories = getData(params.category);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {
        categories.map((category) => (
          <div className={styles.item} key={category.id}>
          <div className={styles.content}>
            <h2>{category.title}</h2>
            <p>{category.desc}</p>
            <Button text="See More" url="#"/>
          </div>
          <div className={styles.imgContainer}>
            <Image fill={true} src={category.image} className={styles.img} />
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default Category