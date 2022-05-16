import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'
import { useSession,signIn,signOut } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className={`grid ${session ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"} `}>
        <section className='md:col-span-2'>
            <Stories/>
            <Posts/>
        </section>
        <section className='hidden md:inline-grid md:col-span-1'>
          <div className='fixed w-[380px]'>
            {/* mini profile */}
              <MiniProfile/>
            {/* Suggestions  */}
            <Suggestions/>
          </div>
        </section>
    </div>
  )
}

export default Feed