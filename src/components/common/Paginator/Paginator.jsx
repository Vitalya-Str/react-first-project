import s from "./Paginator.module.css"
import React from "react";


const Paginator = ({totalUsersCount, pageSize, currentPage, setClickPage}) => {

   const totalPages = Math.ceil(totalUsersCount / pageSize);

   let pages = [];
   for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
   }

   return <div>
      {pages.map(p => {
         return <span key={p.id} className={currentPage === p ? s.fontWeight : s.font} onClick={() => {
            setClickPage(p)
         }}>{p}</span>
      })}
   </div>
}


export default Paginator