import s from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../images/userPhoto.png'
import React from "react";


class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   setClickPage = (numberPage) => {
      this.props.setCurrentPage(numberPage)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
      })
   }


   render() {

      const totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];
      for (let i = 1; i <= totalPages; i++) {
         pages.push(i)
      }

      return <div>
         <div>
            {pages.map(p => {
               return <span className={this.props.currentPage === p ? s.fontWeight : s.font} onClick={() => {
                  this.setClickPage(p)
               }}>{p}</span>
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