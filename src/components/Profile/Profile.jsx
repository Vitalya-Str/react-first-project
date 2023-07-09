import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updatePostChange} from "../../redux/state";


const Profile = (props) => {
   return (
      <div>
         <ProfileInfo/>
         <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
                  dispatch={props.dispatch}/>
      </div>
   )
}

export default Profile