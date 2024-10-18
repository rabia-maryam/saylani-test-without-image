import React from 'react'
import { auth, googleprovider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
function Login({ setUser }) {
    const handleSignin = async () => {
        try {
            const result = await signInWithPopup(auth, googleprovider);
            const user = result.user;
            console.log(user);
            setUser({
                name: user.displayName,
                profilePicture: user.photoURL,
            });
        }
        catch (err) {
            alert("can't login with google")
            console.log(err)
        }
    }
    return (
        <>
            <div className='form-div'>
                <label htmlFor='name'>Name: </label>
                <input type='text' placeholder='Enter name' id='name' />
                <label htmlFor='email'>Email: </label>
                <input type='email' placeholder='Enter Email' id='email' />
                <button onClick={handleSignin}>Login With Google</button>
                <button type='submit'>Submit</button>
            </div>
        </>
    )
}

export default Login