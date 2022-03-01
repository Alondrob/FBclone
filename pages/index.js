import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

export default function Home({session}) {
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
        <Feed/>
    </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);
  
  return {
    props: {
      session
    }
  }
}