import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1325766/pexels-photo-1325766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Dynamic Lance</h1>
          <h3 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur 
          </h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a adipisci consectetur, ea nam minima? Quae minus facilis, ab assumenda nihil, excepturi quasi tempora enim amet cumque architecto eveniet autem voluptatibus quos. Veritatis delectus vero blanditiis sapiente voluptatem. At, eligendi!
          <br />
          <br />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a adipisci consectetur, ea nam minima? Quae minus facilis, ab assumenda nihil, excepturi quasi tempora enim amet cumque architecto eveniet autem voluptatibus quos. Veritatis delectus vero blanditiis sapiente voluptatem. At, eligendi!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum dolor, consequatur inventore similique neque ipsam cupiditate corporis quam excepturi eligendi tempora vitae dolore perspiciatis itaque. Tempora sapiente minus ex suscipit repellat.
          <br />
          <br />
          inventore similique neque ipsam cupiditate corporis quam excepturi eligendi tempora vitae dolore perspiciatis itaque. Tempora sapiente minus ex suscipit repellat.
          </p>

          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  )
}

export default About