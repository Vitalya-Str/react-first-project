import {addPostsActionCreator, updatePostChangeCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//    const state = props.store.getState()
//    const addPost = () => {
//
//       props.store.dispatch(addPostsActionCreator());
//    };
//    const onPostChange = (text) => {
//       props.store.dispatch(updatePostChangeCreator(text));
//    };
//
//    return (
//       <div>
//          <MyPosts addPost={addPost} onPostChange={onPostChange} posts={state.profilePage.posts}
//                   newPostText={state.profilePage.newPostText}/>
//       </div>
//    )
// }

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addPostsActionCreator())
      },
      onPostChange: (text) => {
         dispatch(updatePostChangeCreator(text))
      }
   }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer