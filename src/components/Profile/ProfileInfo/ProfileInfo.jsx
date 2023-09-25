import s from './ProfileInfo.module.css'
import Preloader from "../../../Preloader/Preloader";
import ava from "../../../images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader/>
   }
   return (
      <div>
         <img src={props.profile.photos.large ? props.profile.photos.large: ava } width={200} height={200}  alt='images'/>

         <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
   )
}

export default ProfileInfo