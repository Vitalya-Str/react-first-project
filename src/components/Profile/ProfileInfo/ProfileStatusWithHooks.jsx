import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);
   const activeEditMode = () => {
      setEditMode(true)
   }

   const deActiveEditState = () => {
      setEditMode(false)
      props.updateStatus(status)
   }

   const onSetChange = (e) => {
      setStatus(e.currentTarget.value)

   }

   return (
      <div>
         {!editMode &&
            <div>
               <b>Status</b>: <span onDoubleClick={activeEditMode}>{props.status || '--------'}</span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={onSetChange} autoFocus={true} value={status} onBlur={deActiveEditState}/>
            </div>
         }
      </div>
   )
}


export default ProfileStatusWithHooks;