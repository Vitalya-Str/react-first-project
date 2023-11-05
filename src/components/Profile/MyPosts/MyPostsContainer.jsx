import {addPostsActionCreator} from "../../../redux/profile-reducer";
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
   }

}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addPostsActionCreator: () => {
//          dispatch(addPostsActionCreator())
//       },
//       updatePostChangeCreator: (text) => {
//          dispatch(updatePostChangeCreator(text))
//       }
//    }
// }


const MyPostsContainer = connect(mapStateToProps, {addPostsActionCreator})(MyPosts)

export default MyPostsContainer