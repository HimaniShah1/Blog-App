import React, { useState } from 'react'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    const response = await fetch('https://blog-app-backend1.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    });
    if(response.status === 200) {
      alert('Registration Successfull.')
    } else{
      alert('Registration Failed.')
    }
  }

  return (
    <div className='register'>
        <form onSubmit={handleRegister}>
        <input 
         type="text"
         placeholder='username'
         value={username}
         onChange={e => setUsername(e.target.value)}
        />

        <input 
         type="password"
         placeholder='password'
         value={password}
         onChange={e => setPassword(e.target.value)}
        />

        <button>Register</button>
        
      </form>
      
    </div>
  )
}

export default Register
