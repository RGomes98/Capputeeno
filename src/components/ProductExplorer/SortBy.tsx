'use client';

import { useSortBy } from '@/hooks/useSortBy';

import styles from './SortBy.module.scss';
import Image from 'next/image';

export const SortBy = () => {
  const { isProductsEmpty, currentSortOrder, isDropdownToggled, handleSortBy } = useSortBy();

  return (
    <div className={`${styles.sortBy} ${(isProductsEmpty && styles.disabled) || ''}`}>
      <button id='initial' onClick={(event) => handleSortBy(event)} className={styles.dropdownButton}>
        <span className={styles.text}>{currentSortOrder}</span>
        <Image className={styles.arrow} src='/arrow-down.svg' alt='arrow-down' width={24} height={24} />
      </button>
      {!isProductsEmpty && isDropdownToggled && (
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <button id='latestArrival' onClick={(event) => handleSortBy(event)} className={styles.option}>
              Novidades
            </button>
          </li>
          <li className={styles.menuItem}>
            <button id='highestPrice' onClick={(event) => handleSortBy(event)} className={styles.option}>
              Preço: Maior - menor
            </button>
          </li>
          <li className={styles.menuItem}>
            <button id='lowestPrice' onClick={(event) => handleSortBy(event)} className={styles.option}>
              Preço: Menor - maior
            </button>
          </li>
          <li className={styles.menuItem}>
            <button id='bestSeller' onClick={(event) => handleSortBy(event)} className={styles.option}>
              Mais vendidos
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
