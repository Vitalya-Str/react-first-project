import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
   const state = props.store.getState().profilePage;

   return (
      <div>
         <ProfileInfo/>
         <MyPosts posts={state.posts} newPostText={state.newPostText}
                  dispatch={props.dispatch}/>
      </div>
   )
}

export default Profile