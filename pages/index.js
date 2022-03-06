import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import { db } from '../fireBase'

export default function Home({session, posts}) {
  if(!session) return <Login/>
  console.log('index-session',session)
  return (
    <div >
      <Head>
        <title>FBclone</title>
      </Head>
    
    <Header/>
      
   

    <main className="flex">
        <SideBar />
        <Feed posts={posts}/>
    </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}