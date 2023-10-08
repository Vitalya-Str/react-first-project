import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {

   return <div>

      <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} setClickPage={props.setClickPage}
                 currentPage={props.currentPage}/>

      <div>
         {
            props.users.map(u => <User user={u} followProgress={props.followProgress}
                                       unfollow={props.unfollow} follow={props.follow} key={u.id}/>)
         }

      </div>
   </div>
}


export default Users