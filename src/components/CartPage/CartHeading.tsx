import { formatToCurrency } from '@/utils/formatToCurrency';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { BackButton } from '../BackButton/BackButton';
import { Fragment } from 'react';

import styles from './CartHeading.module.scss';

export const CartHeading = () => {
  const { getShoppingCart } = useShoppingCart();
  const itemsQuantity = getShoppingCart()?.itemsQuantity || 0;
  const subtotal = getShoppingCart()?.subtotal || 0;

  return (
    <Fragment>
      <BackButton />
      <span className={styles.productsHeading}>SEU CARRINHO</span>
      <div className={styles.productsCountWrapper}>
        <span className={styles.productsCount}>
          Total (
          {!itemsQuantity
            ? 'nenhum produto'
            : itemsQuantity === 1
            ? `${itemsQuantity} produto`
            : `${itemsQuantity} produtos`}
          )
        </span>
        <span className={styles.productsSubtotal}>{formatToCurrency(subtotal)}</span>
      </div>
    </Fragment>
  );
};
