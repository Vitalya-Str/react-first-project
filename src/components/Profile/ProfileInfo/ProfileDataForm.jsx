import React from "react";
import {creatField, Input, Textarea} from "../../common/FormControl/FormControl";
import {reduxForm} from "redux-form";
import style from '../../common/FormControl/FormControl.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <button>Save</button>
         </div>
         {
            error && <div className={style.commonError}> {error} </div>
         }
         <div><b>Full name</b>: {creatField('fullName', Input, [], 'Full Name')}</div>
         <div><b>About me</b>: {creatField('aboutMe', Textarea, [], 'About Me')}</div>
         <div><b>Looking for a job</b>: {creatField('lookingForAJob', Input, [], '', {type: 'checkbox'})}</div>
         <div><b>My professional
            skills</b>: {creatField('lookingForAJobDescription', Textarea, [], 'My professional skills',)}</div>
         <div> {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
               <b>{key}:{creatField('contacts.' + key, Input, [], key)}</b>
            </div>
         })}</div>
      </form>
   )
}

const ProfileDataFormRedux = reduxForm({form: 'profileData'})(ProfileDataForm)

export default ProfileDataFormRedux