import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {memo} from "react";


const Profile = memo((props) => {

   return (
      <div>
         <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
         <MyPostsContainer/>
      </div>
   )
})

export default Profile