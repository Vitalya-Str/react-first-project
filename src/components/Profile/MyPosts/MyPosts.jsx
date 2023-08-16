import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

   const postElement = props.posts.map(p => <Post message={p.message} key={p.id} likeCounts={p.likeCounts}/>)

   const onAddPost = (values) => {
      props.addPostsActionCreator(values.newPostElement)
   };

   return (
      <div className={s.item}>
         <div>
            <h3>My posts</h3>
            <AddPostsRedux onSubmit={onAddPost}/>
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   )
}

const AddPostsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={'textarea'} name='newPostElement' placeholder='input text'/>
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
}

const AddPostsRedux = reduxForm({form: 'AddMessagePosts'})(AddPostsForm)

export default MyPosts