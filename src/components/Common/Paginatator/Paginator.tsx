import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Paginator.module.css';

// const styles = React.CSSProperties

type PaginatorProps = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
};
const Paginator: React.FC<PaginatorProps> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  const pagesCount: number = Math.ceil(totalUsersCount / pageSize);
  const pages = [] as Array<number>;
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionSize = 10;
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftBorderNumber = (portionNumber - 1) * portionSize + 1;
  const rightBorderNumber = portionNumber * portionSize;

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
