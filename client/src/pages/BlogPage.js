import React, { useContext, useEffect, useState } from 'react'
import {format} from "date-fns";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { MdDelete, MdShare,MdEditDocument } from "react-icons/md";
import ShareModal from '../components/ShareModal';


function BlogPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    const navigate = useNavigate();
    const [showShareModal, setShowShareModal] = useState(false);

    useEffect(() => {
       fetch(`http://localhost:3001/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        })

    }, [id]);

    if(!postInfo) return '';

    function handleDelete() {
      fetch(`http://localhost:3001/post/${postInfo._id}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
            navigate('/');
        }
    })
    .catch(error => console.error('Error deleting post:', error));

    }

    function handleShare() {
      setShowShareModal(true);
    }

  return (
    <div className='blog-page'>
        {postInfo && (
                <>
                {showShareModal && <ShareModal onClose={() => setShowShareModal(false)} />}
                <div className='actions'>
                    <button className='share' onClick={handleShare}><MdShare />  Share</button>
                    {userInfo && userInfo.id === postInfo.author._id && (
                        <div className='edit'>
                            <Link to={`/edit/${postInfo._id}`}><MdEditDocument /></Link>
                            <button className='delete-button' onClick={handleDelete}><MdDelete /></button>
                        </div>
                    )}
                    
                </div>
                    <h1>{postInfo.title}</h1>
                    <time>{format(new Date(postInfo.createdAt), 'd MMM yyyy')}</time>
                    <div className='author'>by @{postInfo.author.username}</div>

                    <div className='image'>
                        <img src={`http://localhost:3001/${postInfo.cover}`} alt="" />
                    </div>

                    <div className='content' dangerouslySetInnerHTML={{ __html: postInfo.content }} />
                </>
            )}
    </div>
  )
}

export default BlogPage;
