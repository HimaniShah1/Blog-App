import React from 'react'
import {format} from "date-fns";
import {Link} from 'react-router-dom';

function Post({_id,title, summary, cover, content, createdAt, author}) {
  return (
  <>
    <div className='post'>
      <div className='user-name'>@{author.username}</div>
      <div className='post-meta-data'>
         <div className='blog-image'>
          <Link to = {`/post/${_id}`} >
          <img src={'http://localhost:3001/' + cover} alt="blog title"/>
          </Link>
         </div>
         <div className='blog-meta-data'>
          <ul>
           <Link to = {`/post/${_id}`} >
            <li><h1>{title}</h1></li>
           </Link>
            <li className='date'>{format(new Date(createdAt), 'd MMM yyyy')}</li>
            <li>{summary}</li>
          </ul> 
         </div>              
      </div>
    </div>
  </>
  )
}

export default Post
