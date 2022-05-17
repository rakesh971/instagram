import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { Snapshot } from 'recoil';

const Posts = () => {
    const [Posts,SetPosts] = useState([]);
    useEffect(()=>{
        const unsubscribe =onSnapshot(
           query (collection(db,"posts"),orderBy(("timestamp"),"desc")),(Snapshot)=>{
                SetPosts(Snapshot.docs)
            }
        );
        return unsubscribe;
    })
  
  return (
    <div>
        {Posts.map(post=>(
            <Post  
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
            />
        ))}
    </div>
  )
}

export default Posts