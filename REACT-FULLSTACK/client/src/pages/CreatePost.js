import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';

function CreatePost() {
  return (
    <div className='createPostPage'> 
    <Formik >
        <form>
            <label>Title:</label>
            <Field 
                id="inputCreatePost" 
                name="title" 
                placeholder="(Ex. Title...)"
            />
            <label>Post:</label>
            <Field 
                id="inputCreatePost" 
                name="postText" 
                placeholder="(Ex. Post...)"
            />
            <label>Username:</label>
            <Field 
                id="inputCreatePost" 
                name="Username" 
                placeholder="(Ex. John...)"
            />
            <button type='submit'>CreatePost</button>
        </form>
    </Formik> 
    </div>
  )
}

export default CreatePost
