import Preloader from "../../../Preloader/Preloader";
import ava from "../../../images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
   if(!profile){
      return <Preloader/>
   }
   return (
      <div>
         <img src={profile.photos.large ? profile.photos.large: ava } width={200} height={200}  alt='images'/>

         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
   )
}

export default ProfileInfo