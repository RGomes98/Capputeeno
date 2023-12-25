'use client';

import { usePagination } from '@/app/hooks/usePagination';
import { PaginationButton } from './PaginationButton';

import styles from './PaginationBar.module.scss';
import Image from 'next/image';

export const PaginationBar = () => {
  const {
    pagesAmount,
    currentPage,
    paginationButtons,
    isPaginationAtEnd,
    isPaginationAtStart,
    handlePaginationClick,
    handlePaginationSlide,
  } = usePagination();

  return (
    <ul className={styles.paginationList}>
      {paginationButtons.map((buttonIndex) => {
        return (
          <li key={buttonIndex} className={styles.paginationItem}>
            <PaginationButton
              buttonIndex={buttonIndex}
              currentPage={currentPage}
              pagesAmount={pagesAmount}
              handlePaginationClick={handlePaginationClick}
            />
          </li>
        );
      })}
      <li className={styles.paginationItem}>
        <button
          onClick={() => handlePaginationSlide(-1)}
          className={`${styles.button} ${(isPaginationAtStart && styles.disabled) || ''}`}
        >
          <Image className={styles.arrow} src='/arrow-left.svg' alt='arrow-left' width={24} height={24} />
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          onClick={() => handlePaginationSlide(+1)}
          className={`${styles.button} ${(isPaginationAtEnd && styles.disabled) || ''}`}
        >
          <Image className={styles.arrow} src='/arrow-right.svg' alt='arrow-right' width={24} height={24} />
        </button>
      </li>
    </ul>
  );
};
