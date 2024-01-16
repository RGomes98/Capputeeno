import { useMounted } from '@/hooks/useMounted';
import { Loader } from '../Loader/Loader';

import styles from './ProductGridPlaceholder.module.scss';

type GridPlaceholder = { isLoading: boolean; productsLength: number };

export const ProductGridPlaceholder = ({ isLoading, productsLength }: GridPlaceholder) => {
  const { isMounted } = useMounted();

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {isMounted && !isLoading && !productsLength && (
        <span className={styles.text}>Nenhum produto encontrado.</span>
      )}
    </div>
  );
};
