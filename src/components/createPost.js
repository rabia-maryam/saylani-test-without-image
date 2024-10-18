import React, { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';

function Createpost() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageBase64, setImageBase64] = useState(''); // State to store Base64 image
  const [isImageLoading, setIsImageLoading] = useState(false); // State to track image loading

  // Function to handle image conversion to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {

      // if (!file.type.startsWith('image/')) {
      //   alert("Please upload a valid image file."); // Alert if the file is not an image
      //   return; // Stop further processing
      // }

      
      setIsImageLoading(true); // Start loading state
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result); // Store the Base64 string
        setIsImageLoading(false); // End loading state
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  };

  // Handle post creation with image and description
  async function handleCreatePost(data) {
    if (!imageBase64) {
      alert("Please upload an image");
      return;
    }

    try {
      const ref = collection(db, "posts");
      await addDoc(ref, {
        pic: imageBase64, // Store Base64 image string
        des: data.description,
      });
      alert("Successfully added your post");

    } catch (err) {
      alert("Failed to store your post");
      console.log(err);
    }
  }

  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit(handleCreatePost)}>
        {/* Image upload input */}
        <input
          type="file"
          onChange={handleImageChange} // Handle image selection and conversion
          {...register('picture', { required: "Image is required" })}
        />
        {errors.picture && <p className='error'>{errors.picture.message}</p>}
        <br />

        {/* Description input */}
        <input
          type="text"
          placeholder="Enter description"
          {...register('description', {
            required: "Description is required",
            maxLength: {
              value: 100,
              message: "Maximum length is 100 letters"
            }
          })}
        />
        {errors.description && <p className='error'>{errors.description.message}</p>}

        {/* Submit button - disable if image is loading */}
        <button type="submit" disabled={isImageLoading || !imageBase64}>
          {isImageLoading ? "Loading Image..." : "Create Post"}
        </button>
      </form>
    </>
  );
}

export default Createpost;
