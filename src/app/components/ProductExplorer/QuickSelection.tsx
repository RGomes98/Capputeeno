'use client';

import { getElementConditionalStyles } from '@/app/utils/getElementConditionalStyles';
import { useSelectedCategory } from '@/app/hooks/useSelectedCategory';

import styles from './QuickSelection.module.scss';

export const QuickSelection = () => {
  const { selectedCategory, handleSelectedCategory } = useSelectedCategory();

  return (
    <ul className={styles.selectorList}>
      <li className={styles.selectorItem}>
        <button
          id='filterByAll'
          onClick={(event) => handleSelectedCategory(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', 'filterByAll', selectedCategory, styles.enabledBtn)}`}
        >
          TODOS OS PRODUTOS
        </button>
        <span
          className={`${styles.bar}
          ${getElementConditionalStyles('equality', 'filterByAll', selectedCategory, styles.enabledBar)}`}
        />
      </li>
      <li className={styles.selectorItem}>
        <button
          id='filterByTShirts'
          onClick={(event) => handleSelectedCategory(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', 'filterByTShirts', selectedCategory, styles.enabledBtn)}`}
        >
          CAMISETAS
        </button>
        <span
          className={`${styles.bar}
          ${getElementConditionalStyles('equality', 'filterByTShirts', selectedCategory, styles.enabledBar)}`}
        />
      </li>
      <li className={styles.selectorItem}>
        <button
          id='filterByMugs'
          onClick={(event) => handleSelectedCategory(event)}
          className={`${styles.button}
          ${getElementConditionalStyles('equality', 'filterByMugs', selectedCategory, styles.enabledBtn)}`}
        >
          CANECAS
        </button>
        <span
          className={`${styles.bar}
          ${getElementConditionalStyles('equality', 'filterByMugs', selectedCategory, styles.enabledBar)}`}
        />
      </li>
    </ul>
  );
};
