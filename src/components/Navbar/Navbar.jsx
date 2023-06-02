import Link from 'next/link'
import React from 'react'

import styles from "./Navbar.module.css";

const links = [
  {
    id:1,
    title:"Home",
    url:"/"
  },

  {
    id:1,
    title:"Portfolio",
    url:"/portfolio"
  },


  {
    id:1,
    title:"Blog",
    url:"/blog"
  },


  {
    id:1,
    title:"About",
    url:"/about"
  },

  {
    id:1,
    title:"Contact",
    url:"/contact"
  },

  {
    id:1,
    title:"Dashboard",
    url:"/dashboard"
  },
]

const Navbar = () => {
  return (
  <div className={styles.container}>
     <Link href="/" className={styles.logo}>Lamamia</Link>
    <div className={styles.links}>
    {
      links.map( (link) => (
        <Link key={link.id} href={link.url} className={styles.link}>
          {link.title}
        </Link>
      ))}

      <button className={styles.logout}>
        Log Out
      </button>
    </div>
  </div>

  )
}

export default Navbar