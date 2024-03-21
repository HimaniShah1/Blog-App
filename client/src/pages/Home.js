import React, { useEffect, useState } from 'react'
import Post from '../components/Post.js'

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blog-app-backend1.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);
  return (
    <div>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
  )
}

export default Home
