import React from 'react'
import { db } from '../config/firebase'
import { collection , getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'

function Post() {
  const [postListState , setPostListState] = useState([])
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
  async function showPost() {
    try{
      const docSnap =await getDocs(collection(db,'posts'))
      const postListvar = docSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPostListState(postListvar)
    }
    catch(err)
    {
      alert("failed to load post")
      console.log(err)
    }
    finally{
      setLoading(false)
    }
   
  }
  showPost()
},[])

if(loading){
  return <div className='loading'>Loading...</div>;
}
  return (
   <>
   <h1>Your posts</h1>
   <div>
    {postListState.map((postData)=>(
      <div key={postData.id}>
        <img src={postData.pic} alt=''/>
        <h3>{postData.des}</h3>
      </div>
    ))}
   </div>
   </>
  )
}

export default Post