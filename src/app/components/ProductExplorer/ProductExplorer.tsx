import { QuickSelection } from './QuickSelection';
import { SortBy } from './SortBy';

import styles from './ProductExplorer.module.scss';

export const ProductExplorer = () => {
  return (
    <div className={styles.productExplorer}>
      <QuickSelection />
      <SortBy />
    </div>
  );
};
