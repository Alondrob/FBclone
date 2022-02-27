import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <div >
      <Head>
        <title>FBclone</title>
      </Head>
    
    <Header/>
      
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