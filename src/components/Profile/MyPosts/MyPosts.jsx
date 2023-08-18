import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormControl/FormControl";


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

const maxLength15 = maxLengthCreator(15)
const AddPostsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} validate={[required, maxLength15]} name='newPostElement'
                   placeholder='new message'/>
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
}

const AddPostsRedux = reduxForm({form: 'AddMessagePosts'})(AddPostsForm)

export default MyPosts