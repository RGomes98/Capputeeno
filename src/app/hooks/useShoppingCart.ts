'use client';

import type { CartItem, ShoppingCart } from '../context/Context';
import { createShoppingCart } from '../utils/createShoppingCart';
import { useContext } from '../context/Context';
import { useEffect } from 'react';

export const useShoppingCart = () => {
  const { shoppingCart, setShoppingCart } = useContext();

  useEffect(() => {
    createShoppingCart(false, setShoppingCart);
  }, [setShoppingCart]);

  const shoppingCartToMutate = structuredClone(shoppingCart);

  const getShoppingCart = () => shoppingCart;

  const resetShoppingCart = () => createShoppingCart(true, setShoppingCart);

  const getShoppingCartSubtotal = (cart: ShoppingCart) => {
    const { items } = cart;

    const shoppingCartSubtotal = items.reduce((subtotal, { price_in_cents, quantity }) => {
      return (subtotal += price_in_cents * quantity);
    }, 0);

    return shoppingCartSubtotal;
  };

  const getShoppingCartItemsQuantity = (cart: ShoppingCart) => {
    const { items } = cart;

    const shoppingCartItemsQuantity = items.reduce((itemsQuantity, { quantity }) => {
      return (itemsQuantity += quantity);
    }, 0);

    return shoppingCartItemsQuantity;
  };

  const updateShoppingCart = (cart: ShoppingCart) => {
    cart.subtotal = getShoppingCartSubtotal(cart);
    cart.itemsQuantity = getShoppingCartItemsQuantity(cart);

    const isShippingCostFree = cart.subtotal / 100 > 900 || cart.itemsQuantity <= 0;
    cart.shippingCost = isShippingCostFree ? 0 : 4000;

    setShoppingCart(cart);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  };

  const addShoppingCartItem = (item: CartItem) => {
    if (shoppingCartToMutate) {
      const { items } = shoppingCartToMutate;

      const isItemAlreadyInCart = items.find(({ id }) => id === item.id);

      if (isItemAlreadyInCart && isItemAlreadyInCart.quantity === 5) return;
      !isItemAlreadyInCart ? items.push(item) : (isItemAlreadyInCart.quantity += 1);
      updateShoppingCart(shoppingCartToMutate);
    }
  };

  const updateShoppingCartItem = (item: CartItem) => {
    if (shoppingCartToMutate) {
      const { items } = shoppingCartToMutate;

      const itemToUpdate = items.find(({ id }) => id === item.id);
      if (itemToUpdate) itemToUpdate.quantity = item.quantity;
      updateShoppingCart(shoppingCartToMutate);
    }
  };

  const removeShoppingCartItem = (item: CartItem) => {
    if (shoppingCartToMutate) {
      const { items } = shoppingCartToMutate;

      const itemToRemove = items.find(({ id }) => id === item.id);
      if (itemToRemove) shoppingCartToMutate.items = items.filter(({ id }) => id !== itemToRemove.id);
      updateShoppingCart(shoppingCartToMutate);
    }
  };

  return {
    getShoppingCart,
    resetShoppingCart,
    addShoppingCartItem,
    updateShoppingCartItem,
    removeShoppingCartItem,
  };
};
