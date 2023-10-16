import Preloader from "../../../Preloader/Preloader";
import ava from "../../../images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css"



const ProfileInfo = ({profile, status, updateStatus,isOwner,savePhoto}) => {
   if(!profile){
      return <Preloader/>
   }

   const onMainPhoto = (e) =>{
      if(e.target.files.length){
         savePhoto(e.target.files[0])
      }
   }
   return (
      <div>
         <img src={profile.photos.large ? profile.photos.large: ava }  className={s.sizeAva} alt='images'/>
         {
            isOwner && <input className={s.avatar } type="file" onChange={onMainPhoto}/>
         }

         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
   )
}

export default ProfileInfo