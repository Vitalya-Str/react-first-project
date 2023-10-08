import s from "./Users.module.css"
import userPhoto from '../../images/userPhoto.png'
import React from "react";
import {NavLink} from "react-router-dom";


const User = ({user, followProgress, unfollow, follow, ...props }) => {

   return (

      <div>
             <span>
                <div>
                   <NavLink to={'/profile/' + user.id}>
                   <img className={s.photo} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                   </NavLink>
                </div>
                <div>
                   {user.followed ? <button disabled={followProgress.some(id => id === user.id)} onClick={() => {
                         unfollow(user.id)
                      }}>Unfollow</button>
                      : <button disabled={followProgress.some(id => id === user.id)} onClick={() => {
                         follow(user.id)
                      }}>Follow</button>}
                </div>
             </span>
         <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
             </span>
         <span>
               <div>{'user.location.country'}</div>
               <div>{'user.location.city'}</div>
            </span>
      </div>
   )
}


export default User