import s from "./Users.module.css"
import userPhoto from '../../images/userPhoto.png'
import React from "react";


const Users = (props) => {

   const totalPages = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
   }

   return <div>
      <div>
         {pages.map(p => {
            return <span className={props.currentPage === p ? s.fontWeight : s.font} onClick={() => {
               props.setClickPage(p)
            }}>{p}</span>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id}>
             <span>
                <div>
                   <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </div>
                <div>
                   {u.followed ? <button onClick={() => {
                         props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button onClick={() => {
                         props.follow(u.id)
                      }}>Follow</button>}
                </div>
             </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
             </span>
            <span>
               <div>{'u.location.country'}</div>
               <div>{'u.location.city'}</div>
            </span>
         </div>)
      }
   </div>
}


export default Users