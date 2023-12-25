import { formatToCurrency } from '@/app/utils/formatToCurrency';
import { useShoppingCart } from '@/app/hooks/useShoppingCart';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

import styles from './CartSidebar.module.scss';
import Link from 'next/link';

export const CartSidebar = () => {
  const { getShoppingCart, resetShoppingCart } = useShoppingCart();
  const { push } = useRouter();

  const isCartEmpty = (getShoppingCart()?.itemsQuantity || 0) <= 0;
  const shippingCost = getShoppingCart()?.shippingCost || 0;
  const subtotal = getShoppingCart()?.subtotal || 0;
  const isShippingCostFree = subtotal / 100 > 900;

  const handleCartPurchase = () => {
    if (isCartEmpty) return;
    resetShoppingCart();
    push('/');
  };

  return (
    <Fragment>
      <span className={styles.secondaryWrapperHeading}>RESUMO DO PEDIDO</span>
      <ul className={styles.purchaseList}>
        <li className={styles.purchaseItem}>
          <span className={styles.itemHeading}>Subtotal de produtos</span>
          <span className={styles.itemValue}>{formatToCurrency(subtotal)}</span>
        </li>
        <li className={styles.purchaseItem}>
          <span className={styles.itemHeading}>Entrega</span>

          <span className={styles.itemValue}>
            {isShippingCostFree ? (
              <span className={styles.freeShipping}>Grátis</span>
            ) : (
              formatToCurrency(shippingCost)
            )}
          </span>
        </li>
        <li className={styles.purchaseItem}>
          <span className={styles.itemHeading}>Total</span>
          <span>{formatToCurrency(subtotal + shippingCost)}</span>
        </li>
      </ul>
      <button
        disabled={isCartEmpty}
        onClick={handleCartPurchase}
        className={`${styles.purchaseBtn} ${(isCartEmpty && styles.disabledBtn) || ''}`}
      >
        FINALIZAR A COMPRA
      </button>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} href='#'>
          AJUDA
        </Link>
        <Link className={styles.link} href='#'>
          REEMBOLSOS
        </Link>
        <Link className={styles.link} href='#'>
          ENTREGAS E FRETES
        </Link>
        <Link className={styles.link} href='#'>
          TROCAS E DEVOLUÇÕES
        </Link>
      </div>
    </Fragment>
  );
};
