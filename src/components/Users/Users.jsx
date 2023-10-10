import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({totalUsersCount, pageSize, setClickPage, currentPage, ...props}) => {
   return <div>

      <Paginator totalItemCount={totalUsersCount} pageSize={pageSize} setClickPage={setClickPage}
                 currentPage={currentPage}/>

      <div>
         {
            props.users.map(u => <User user={u} followProgress={props.followProgress}
                                       unfollow={props.unfollow} follow={props.follow} key={u.id}/>)
         }

      </div>
   </div>
}


export default Users