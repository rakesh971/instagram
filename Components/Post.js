import React from 'react'
import { DotsHorizontalIcon,HeartIcon,ChatIcon,BookmarkIcon,EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { async } from '@firebase/util'
import { comment } from 'postcss'
import { addDoc, collection,onSnapshot,serverTimestamp ,query,orderBy} from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect } from 'react'
import { Snapshot } from 'recoil'
import Moment from 'react-moment';


const Post = ({img,username,caption,userImg,id}) => {
  const {data:session}= useSession()
  const [Comment,SetComment] =useState("");
  const [Comments,SetComments] =useState("")

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        SetComments(snapshot.docs);
      }
    );
  }, [db, id]);

 async function sendComment(event){
    event.preventDefault();
    const commentToSend = Comment;
    SetComment("")
    await addDoc(collection(db,"posts",id,"comments"),{
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),

    })
  }
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
       <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span><span>{caption}</span></p>
       {Comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {Comments.map((comment) => (
            <div
              key={comment.data().id}
              className="flex items-center space-x-2 mb-2"
            >
              <img
                className="h-7  rounded-full object-cover"
                src={comment.data().userImage}
                alt="user-image"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
        {/* post input box */}

        {session && (
            <form action='' className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7'/>
                <input 
                  value={Comment}
                  onChange={(event)=>SetComment(event.target.value)}
                  type="text" placeholder="Enter the comment" className='flex-1 border-none focus:ring-0'
                />
                <button
                    type='submit'
                    onClick={sendComment}
                    disabled ={!Comment.trim()}className='text-blue-400 font-bold disabled:text-blue-200'>
                        Post
                 </button>
            </form>

        )

        }
    </div>
  )
}

export default Post