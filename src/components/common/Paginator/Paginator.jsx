import s from "./Paginator.module.css"
import React, {useState} from "react";


const Paginator = ({totalItemCount, pageSize, currentPage, setClickPage, portionSize = 10,}) => {

   const totalPages = Math.ceil(totalItemCount / pageSize);

   let pages = [];
   for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
   }

   const portionCount = Math.ceil(totalPages / portionSize);
   const [portionNumber, setPortionNumber] = useState(1);
   const leftPageNumberButton = (portionNumber - 1) * portionSize + 1;
   const rightPageNumberButton = portionNumber * portionSize;


   return <div className={s.paginator}>
      {
         portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
         }}>PREV</button>
      }
      {pages.filter((p) => p >= leftPageNumberButton && p <= rightPageNumberButton)
         .map(p => {
            return <span key={p.id} className={currentPage === p ? s.pageNumber : s.font} onClick={() => {
               setClickPage(p)
            }}>{p}</span>
         })}
      {
         portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
         }}>NEXT</button>
      }
   </div>
}


export default Paginator