import Preloader from "../../../Preloader/Preloader";
import ava from "../../../images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css"


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   if (!profile) {
      return <Preloader/>
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }
   }
   return (
      <div>
         <img src={profile.photos.large || ava} className={s.mainPhoto} alt='images'/>
         {
            isOwner && <input className={s.input} type={"file"} onChange={onMainPhotoSelected}/>
         }
         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
   )
}

export default ProfileInfo