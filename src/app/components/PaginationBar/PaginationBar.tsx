'use client';

import { getElementConditionalStyles } from '@/app/utils/getElementConditionalStyles';
import { usePagination } from '@/app/hooks/usePagination';

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

  const [firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex] = paginationButtons;

  return (
    <ul className={styles.paginationList}>
      <li className={styles.paginationItem}>
        <button
          id={String(firstIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', firstIndex, currentPage, styles.enabled)}
          ${getElementConditionalStyles('relational', firstIndex, pagesAmount, styles.disabled)}`}
        >
          {firstIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(secondIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', secondIndex, currentPage, styles.enabled)}
          ${getElementConditionalStyles('relational', secondIndex, pagesAmount, styles.disabled)}`}
        >
          {secondIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(thirdIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', thirdIndex, currentPage, styles.enabled)}
          ${getElementConditionalStyles('relational', secondIndex, pagesAmount, styles.disabled)}`}
        >
          {thirdIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(fourthIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', fourthIndex, currentPage, styles.enabled)}
          ${getElementConditionalStyles('relational', secondIndex, pagesAmount, styles.disabled)}`}
        >
          {fourthIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(fifthIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', fifthIndex, currentPage, styles.enabled)}
          ${getElementConditionalStyles('relational', secondIndex, pagesAmount, styles.disabled)}`}
        >
          {fifthIndex}
        </button>
      </li>
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
          <Image className={styles.arrow} src='/arrow-right.svg' alt='arrow-left' width={24} height={24} />
        </button>
      </li>
    </ul>
  );
};
