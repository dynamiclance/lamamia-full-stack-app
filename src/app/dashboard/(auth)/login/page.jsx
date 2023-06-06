"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import styles from "./page.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Login = () => {

  const [error, setError] = useState(false);

  const session = useSession();
  const router = useRouter();

  if(session.status === "loading") {

  }

  if(session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };


  return (
  
     
     <div className={styles.container}>

      <h1 className={styles.title}>Login Now</h1>
    
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button type='submit' className={styles.button}>Login</button>
        {error && "Something went wrong!"}
      </form>
      
      <span className={styles.or}>- OR -</span>
      <br />
      <button onClick={() => signIn("google")}>Google Sign In</button>
      <button onClick={() => signOut ("google")}>Google Sign Out</button>

      <Link href="/dashboard/register" className={styles.button}>Rgister</Link>
    </div>
  )
}

export default Login