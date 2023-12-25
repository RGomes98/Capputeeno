'use client';

import { useShoppingCart } from '@/app/hooks/useShoppingCart';
import { useMounted } from '@/app/hooks/useMounted';
import { CartSidebar } from './CartSidebar';
import { CartHeading } from './CartHeading';
import { CartItem } from './CartItem';
import { Fragment } from 'react';

import styles from './CartPage.module.scss';

export const CartPage = () => {
  const { getShoppingCart } = useShoppingCart();
  const { isMounted } = useMounted();

  const isCartEmpty = (getShoppingCart()?.itemsQuantity || 0) <= 0;

  return (
    <Fragment>
      {isMounted && (
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <CartHeading />
            <div className={styles.productsWrapper}>
              {getShoppingCart()?.items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            {isCartEmpty ? <span className={styles.emptyCart}>Seu carrinho está vazio.</span> : null}
          </div>
          <div className={styles.secondaryWrapper}>
            <CartSidebar />
          </div>
        </div>
      )}
    </Fragment>
  );
};
