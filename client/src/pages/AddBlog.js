import React, { useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

function AddBlog() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  async function createNewPost(e) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0])
    e.preventDefault();
    console.log(files);
    const response = await fetch('https://blog-app-backend1.onrender.com/post',{
      method: 'POST',
      body: data,
      credentials: 'include',

    })
    if(response.ok){
      setRedirect(true);
    }

  }

  if(redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form className='add-blog' onSubmit={createNewPost}>
      <input 
        type="title" 
        placeholder={'Title'} 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input 
        type='summary' 
        placeholder={'Summary'}
        value={summary}
        onChange={e => setSummary(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={e => setFiles(e.target.files)}
      />
      <ReactQuill 
        value={content}
        modules={modules}
        onChange={newValue => setContent(newValue)}
      />
      <button>Add Blog</button>
    </form>
  )
}

export default AddBlog
