"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const Dashboard = () => {


  const session = useSession();
  const router = useRouter();

  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  if(session.status === "loading") {
    return <p>Loading...</p>
  }

  if(session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

 if(session.status === "authenticated") {
    return (
      <div>Dashboard</div>
    )
  }

}

export default Dashboard