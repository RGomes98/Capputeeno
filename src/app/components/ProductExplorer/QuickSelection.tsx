'use client';

import { getSelectedElementStyle } from '@/app/utils/getSelectedElementStyle';
import { useSelectedCategory } from '@/app/hooks/useSelectedCategory';
import { useContext } from '@/app/context/Context';

import styles from './QuickSelection.module.scss';

export const QuickSelection = () => {
  const { selectedCategory, setSelectedCategory } = useContext();
  const { handleSelectedCategory } = useSelectedCategory();

  return (
    <ul className={styles.selectorList}>
      <li className={styles.selectorItem}>
        <button
          onClick={(event) => {
            handleSelectedCategory(event);
            setSelectedCategory('filterByAll');
          }}
          className={`${styles.button}
          ${getSelectedElementStyle('filterByAll', selectedCategory, styles.selectedButton)}`}
        >
          TODOS OS PRODUTOS
        </button>
        <span
          className={`${styles.bar}
          ${getSelectedElementStyle('filterByAll', selectedCategory, styles.selectedBar)}`}
        />
      </li>
      <li className={styles.selectorItem}>
        <button
          id='filterByTShirts'
          onClick={(event) => {
            handleSelectedCategory(event);
            setSelectedCategory('filterByTShirts');
          }}
          className={`${styles.button}
          ${getSelectedElementStyle('filterByTShirts', selectedCategory, styles.selectedButton)}`}
        >
          CAMISETAS
        </button>
        <span
          className={`${styles.bar}
          ${getSelectedElementStyle('filterByTShirts', selectedCategory, styles.selectedBar)}`}
        />
      </li>
      <li className={styles.selectorItem}>
        <button
          id='filterByMugs'
          onClick={(event) => {
            handleSelectedCategory(event);
            setSelectedCategory('filterByMugs');
          }}
          className={`${styles.button}
          ${getSelectedElementStyle('filterByMugs', selectedCategory, styles.selectedButton)}`}
        >
          CANECAS
        </button>
        <span
          className={`${styles.bar}
          ${getSelectedElementStyle('filterByMugs', selectedCategory, styles.selectedBar)}`}
        />
      </li>
    </ul>
  );
};
