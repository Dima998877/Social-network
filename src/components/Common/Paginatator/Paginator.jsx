import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Paginator.module.css';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionSize = 10;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftBorderNumber = (portionNumber - 1) * portionSize + 1;
  let rightBorderNumber = portionNumber * portionSize;

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage, portionSize]
  );

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      <div className={styles.page_number}>
        {pages
          .filter((p) => p >= leftBorderNumber - 1 && p <= rightBorderNumber)
          .map((p) => {
            return (
              <span
                key={p}
                onClick={() => onPageChanged(p)}
                className={cn(
                  {
                    [styles.selected_page]: currentPage === p,
                  },
                  styles.page_number
                )}
              >
                {p}
              </span>
            );
          })}
      </div>
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Paginator;
