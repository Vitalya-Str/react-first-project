import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

   const postElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

   const newPostElement = React.createRef();

   const addPost = () => {

      const text = newPostElement.current.value;
      props.addPosts(text);
      newPostElement.current.value = ''
   }

   return (
      <div className={s.item}>
         <div>
            <h3>My posts</h3>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   )
}

export default MyPosts