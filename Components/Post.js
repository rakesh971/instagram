import React from 'react'
import { DotsHorizontalIcon,HeartIcon,ChatIcon,BookmarkIcon,EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
const Post = ({img,username,caption,userImg,id}) => {
  const {data:session}= useSession()
  return (
    <div className='bg-white my-7 border rounded-md'>
       <div className='flex items-center p-5'>
            <img src={userImg} alt={username}className="h-12 w-12 rounded-full object-cover border p-1 mr-3 object-cover"/>
            <p className="font-bold flex-1">{username}</p>
            <DotsHorizontalIcon className="h-5" />
       </div>
       <img src={img} className="object-cover w-full"/>
       
       {/* post buttons */}
       {session && (
        <div className='flex justify-between px-4 pt-4 py-4'>
          <div className='flex space-x-4'>
              <HeartIcon className='btn'/>
              <ChatIcon className='btn'/>
          </div>
          <BookmarkIcon className='btn'/>
        </div>
       )   
       }

       {/* post comments */}
       <p className='p-5 truncate'><span className='foonnt-bold mr-2'>{username}</span><span>{caption}</span></p>
        {/* post input box */}

        {session && (
            <form action='' className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7'/>
                <input type="text" placeholder="Enter the comment" className='flex-1 border-none focus:ring-0'/>
                <button className='text-blue-400 font-bold'>Post</button>
            </form>

        )

        }
    </div>
  )
}

export default Post