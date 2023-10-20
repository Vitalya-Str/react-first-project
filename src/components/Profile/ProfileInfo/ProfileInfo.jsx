import Preloader from "../../../Preloader/Preloader";
import ava from "../../../images/userPhoto.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css"
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

   const [editMode, setEditMode] = useState(false)

   if (!profile) {
      return <Preloader/>
   }
   const onClickEditMode = () => {
      setEditMode(true)
   }
   const onSubmit = (formData) => {
      saveProfile(formData).then(
         () => {
            setEditMode(false)
         }
      )

   }

   const onMainPhoto = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }
   }

   return (
      <div>
         <img src={profile.photos.large ? profile.photos.large : ava} className={s.sizeAva} alt='images'/>

         {isOwner && <input className={s.avatar} type="file" onChange={onMainPhoto}/>}

         {editMode ?
            <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
            <ProfileData onClickEditMode={onClickEditMode} profile={profile} isOwner={isOwner}/>}

         <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
   )
}


const ProfileData = ({profile, onClickEditMode, isOwner}) => {

   return (<div>
      {isOwner && <div>
         <button onClick={onClickEditMode}>Edit</button>
      </div>}
      <div><b>Full name</b>: {profile.fullName}</div>
      <div><b>About me</b>: {profile.aboutMe}</div>
      <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJob &&
         <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
      }
      <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
         return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}</div>
   </div>)
}


const Contact = ({contactTitle, contactValue}) => {
   return <div><b>{contactTitle}</b>: {contactValue} </div>
}


export default ProfileInfo