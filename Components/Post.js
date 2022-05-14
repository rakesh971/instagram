import React from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

const Post = ({img,username,captions,userImg,id}) => {
  return (
    <div className='bg-white my-7 border rounded-md'>
       <div className='flex items-center p-5'>
            <img src={userImg} alt={username}className="h-12 w-12 rounded-full object-cover border p-1 mr-3 object-cover"/>
            <p className="font-bold flex-1">{username}</p>
            <DotsHorizontalIcon className="h-5" />
       </div>
       <img src={img} lassName="object-cover w-full"/>
    </div>
  )
}

export default Post