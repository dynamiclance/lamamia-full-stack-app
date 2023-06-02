import Image from 'next/image';
import styles from './page.module.css';
import Hero from "public/hero.png"
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2 className={styles.title}>Lorem ipsum dolor sit amet cons.</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempora cupiditate sed doloremque at blanditiis provident sapiente.</p>
        <Button url="/portfolio" text="see more work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img}/>
      </div>
    </div>
  )
}
