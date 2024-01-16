import { type ShoppingCart, isLocalStorageDefined } from '../context/Context';
import type { Dispatch, SetStateAction } from 'react';

export const createShoppingCart = (
  isCartReset: boolean,
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>
) => {
  if (!isLocalStorageDefined) return;

  const isCartCreated = localStorage.getItem('shoppingCart');
  const shoppingCart = { subtotal: 0, itemsQuantity: 0, shippingCost: 0, items: [] };

  if (!isCartCreated || isCartReset) {
    setShoppingCart(shoppingCart);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }
};
