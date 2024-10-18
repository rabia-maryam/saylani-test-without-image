import React from 'react'
import { Link } from 'react-router-dom'
// import ProfileImage from './ProfileImage';

function Navbar({user}) {
  return (
    <>
    <nav>
        <div>
        {user ? (
            <div className='user-data'>
              <img src={user.profilePicture} alt='pic' width="50px" height="50px"/>
              <h1>{user.name}</h1>
              
              </div>
          ) : (
            <h1>Hello User</h1>
          )}
        </div>
        <div>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/' className='nav-link'>About</Link>
            <Link to='/' className='nav-link'>Contact</Link>
            <Link to='/createpost' className='nav-link'>create post</Link>
            <Link to='/post' className='nav-link'>Post</Link>
            <Link to='/login' className='nav-link'>Login</Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar