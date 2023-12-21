'use client';

import { getSelectedElementStyle } from '@/app/utils/getSelectedElementStyle';
import { usePagination } from '@/app/hooks/usePagination';

import styles from './PaginationBar.module.scss';
import Image from 'next/image';

export const PaginationBar = () => {
  const { currentPage, paginationButtons, handlePaginationClick, handlePaginationSlide } = usePagination();
  const [firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex] = paginationButtons;

  return (
    <ul className={styles.paginationList}>
      <li className={styles.paginationItem}>
        <button
          id={String(firstIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getSelectedElementStyle(firstIndex, currentPage, styles.selectedButton)}`}
        >
          {firstIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(secondIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getSelectedElementStyle(secondIndex, currentPage, styles.selectedButton)}`}
        >
          {secondIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(thirdIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getSelectedElementStyle(thirdIndex, currentPage, styles.selectedButton)}`}
        >
          {thirdIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(fourthIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getSelectedElementStyle(fourthIndex, currentPage, styles.selectedButton)}`}
        >
          {fourthIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button
          id={String(fifthIndex)}
          onClick={(event) => handlePaginationClick(event)}
          className={`${styles.button}
          ${getSelectedElementStyle(fifthIndex, currentPage, styles.selectedButton)}`}
        >
          {fifthIndex}
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button onClick={() => handlePaginationSlide(-1)} className={styles.button}>
          <Image className={styles.arrow} src='/arrow-left.svg' alt='arrow-left' width={24} height={24} />
        </button>
      </li>
      <li className={styles.paginationItem}>
        <button onClick={() => handlePaginationSlide(+1)} className={styles.button}>
          <Image className={styles.arrow} src='/arrow-right.svg' alt='arrow-left' width={24} height={24} />
        </button>
      </li>
    </ul>
  );
};
