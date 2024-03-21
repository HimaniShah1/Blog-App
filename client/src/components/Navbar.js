import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

function Navbar() {
   const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch('https://blog-app-backend1.onrender.com/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    },[]);

    function logout() {
        fetch('https://blog-app-backend1.onrender.com/logout',{
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

  return (
    <nav className='navbar'>
        <Link to='/' className='site-title'>MyBlogs</Link>
        {username && (
            <>
            <ul>
            <li>
                <Link to='/addblog'>Add Blog</Link> 
            </li>
            <li>
                <a  onClick={logout}>Logout</a>
            </li>
            </ul>      
        </>
        )}
        {!username && (
            <>
                <ul>
                <li>
                    <Link to='/login'>Login</Link> 
                </li>
                <li>
                    <Link to='/register'>Register</Link> 
                </li>
               </ul>
            </>
        )}
        
    </nav>
  )
}

export default Navbar
