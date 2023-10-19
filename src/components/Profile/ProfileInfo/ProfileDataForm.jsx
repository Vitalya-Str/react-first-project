import React from "react";
import {creatField, Input, Textarea} from "../../common/FormControl/FormControl";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit}) => {

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <button>Save</button>
         </div>
         <div><b>Full name</b>: {creatField('fullName', Input, [], 'Full Name')}</div>
         <div><b>About me</b>: {creatField('aboutMe', Textarea, [], 'About Me')}</div>
         <div><b>Looking for a job</b>: {creatField('lookingForAJob', Input, [], '', {type: 'checkbox'})}</div>
         <div><b>My professional
            skills</b>: {creatField('lookingForAJobDescription', Textarea, [], 'My professional skills',)}</div>
         {/*<div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {*/}
         {/*   return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
         {/*})}</div>*/}
      </form>
   )
}

const ProfileDataFormRedux = reduxForm({form: 'profileData'})(ProfileDataForm)

export default ProfileDataFormRedux