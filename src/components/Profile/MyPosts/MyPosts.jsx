import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

   const postElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

   const newPostElement = React.createRef();

   const onAddPost = () => {
      props.addPost()
   };
   const onPostChange = () => {
      const text = newPostElement.current.value;
      props.onPostChange(text)
   }
   return (
      <div className={s.item}>
         <div>
            <h3>My posts</h3>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
               <button onClick={onAddPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   )
}

export default MyPosts