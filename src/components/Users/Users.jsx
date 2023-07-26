import s from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../images/userPhoto.png'
import React from "react";


class Users extends React.Component {
   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         this.props.setUsers(response.data.items)
      })
   }

   render() {
      const totalPages = this.props.totalUsersCount / this.props.pageSize;

      let pages = [];
      for (let  i = 1; i <= totalPages; i++){
         pages.push(i)
      }

      console.log(this.props)
      return <div>
         <div>
            { pages.map(p =>{
              return <span  className={ true && s.fontWeight}>{p}</span>

            })}
         </div>

         {
            this.props.users.map(u => <div key={u.id}>
             <span>
                <div>
                   <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </div>
                <div>
                   {u.followed ? <button onClick={() => {
                         this.props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button onClick={() => {
                         this.props.follow(u.id)
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
}


export default Users