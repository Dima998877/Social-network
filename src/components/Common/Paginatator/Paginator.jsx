import React, { useEffect, useState } from 'react'
import styles from './Paginator.module.css'

const Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   let portionSize = 10
   let portionCount = Math.ceil(pagesCount / portionSize)
   let [portionNumber, setPortionNumber] = useState(1)
   let leftBorderNumber = (portionNumber - 1) * portionSize + 1
   let rightBorderNumber = portionNumber * portionSize;
   useEffect(()=>setPortionNumber(Math.ceil(props.currentPage/portionSize)), [props.currentPage, portionSize]);

   return (
      <div className={styles.paginator}>
         { portionNumber > 1 
         && <button onClick={ () => {setPortionNumber(portionNumber-1)}}>Previous</button>}
         <div className={styles.page_number}>
            {pages
            .filter(p => p >= leftBorderNumber - 1 && p <= rightBorderNumber)
            .map( (p) => {
               return <span key={p}
                  onClick={ (e) => props.onPageChanged(p) }
                  className={props.currentPage === p ? styles.selected_page : ''}>{p}</span>
            })}
         </div>
         {portionCount > portionNumber && 
         <button onClick={ () => {setPortionNumber(portionNumber + 1)} }>Next</button>}
      </div>
   )
}
export default Paginator