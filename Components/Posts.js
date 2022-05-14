import React from 'react'
import Post from './Post'

const Posts = () => {
    const posts =[
        {
            id:"1",
            username:"rakesh",
            userImg:"https://new-img.patrika.com/upload/2022/03/27/ram-charan-next-target-mother-dream.jpg",
            img:"https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            caption:"nice picture",
        },
        
        {
            id:"2",
            username:"nava shreyas",
            userImg:"https://new-img.patrika.com/upload/2022/03/27/ram-charan-next-target-mother-dream.jpg",
            img:"https://images.unsplash.com/photo-1652510192446-b553fc3c88ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            caption:"mama",
        }
    ]
  return (
    <div>
        {posts.map(post=>(
            <Post  
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts