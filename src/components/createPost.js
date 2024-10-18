import React from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useForm } from 'react-hook-form'


function Createpost() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  async function handleCreatePost(data) {
    console.log(data.picture, data.description)
    try {
      const ref = collection(db, "posts")
      await addDoc(ref, {
        pic: data.picture[0].name,
        des: data.description
      })
      alert("succesfully added your post")

    } catch (err) {
      alert("failed to store your post")
      console.log(err)
    }
  }
  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit(handleCreatePost)}>
        <input
          type="file"
          {...register('picture', { required: "name is required" })}
        />
        {errors.picture && <p className='error'>{errors.picture.message}</p>}
        <br />
        <input
          type="text"
          placeholder="Enter description"
          {...register('description', {
            required: "Description is required", maxLength: {
              value: 100, message: "Maximum length is 100 letters"
            }
          })}
        />
        {errors.description && <p className='error'>{errors.description.message}</p>}
        <button type='Submit'>Create Post</button>
      </form>
    </>
  )
}

export default Createpost