import React from 'react'
import { DotsHorizontalIcon,HeartIcon,ChatIcon,BookmarkIcon } from '@heroicons/react/outline'

const Post = ({img,username,captions,userImg,id}) => {
  return (
    <div className='bg-white my-7 border rounded-md'>
       <div className='flex items-center p-5'>
            <img src={userImg} alt={username}className="h-12 w-12 rounded-full object-cover border p-1 mr-3 object-cover"/>
            <p className="font-bold flex-1">{username}</p>
            <DotsHorizontalIcon className="h-5" />
       </div>
       <img src={img} lassName="object-cover w-full"/>
       
       {/* post buttons */}
       <div className='flex justify-between px-4 pt-4 py-4'>
          <div className='flex space-x-4'>
              <HeartIcon className='btn'/>
              <ChatIcon className='btn'/>
          </div>
          <BookmarkIcon className='btn'/>
       </div>
    </div>
  )
}

export default Post