import React from "react";
import {addPostsActionCreator, updatePostChangeCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
   const state = props.store.getState()
   const addPost = () => {

      props.store.dispatch(addPostsActionCreator());
   };
   const onPostChange = (text) => {
      props.store.dispatch(updatePostChangeCreator(text));
   };

   return (
      <div>
         <MyPosts addPost={addPost} onPostChange={onPostChange} posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText}/>
      </div>
   )
}

export default MyPostsContainer