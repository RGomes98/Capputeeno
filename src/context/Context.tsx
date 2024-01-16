'use client';

import { useState, createContext, useContext as useReactContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Product } from '../data/mock';

export type CartItem = Product & { quantity: number };

export type ShoppingCart = {
  itemsQuantity: number;
  subtotal: number;
  shippingCost: number;
  items: CartItem[];
};

type SortingBy =
  | 'Organizar por'
  | 'Novidades'
  | 'Preço: Maior - menor'
  | 'Preço: Menor - maior'
  | 'Mais vendidos';

type DropdownMenuState = { isDropdownToggled: boolean; sortingBy: SortingBy };
type PaginationState = { page: number; range: number[]; buttons: number[] };
type SelectedCategory = 'filterByAll' | 'filterByTShirts' | 'filterByMugs';
type SetPaginationState = Dispatch<SetStateAction<PaginationState>>;
type SetProducts = Dispatch<SetStateAction<Product[]>>;

type Context = {
  products: Product[];
  setProducts: SetProducts;
  productsInitialState: Product[];
  setProductsInitialState: SetProducts;
  paginationState: PaginationState;
  setPaginationState: SetPaginationState;
  dropdownMenuState: DropdownMenuState;
  setDropdownMenuState: Dispatch<SetStateAction<DropdownMenuState>>;
  selectedCategory: SelectedCategory;
  setSelectedCategory: Dispatch<SetStateAction<SelectedCategory>>;
  shoppingCart: ShoppingCart | null;
  setShoppingCart: Dispatch<SetStateAction<ShoppingCart | null>>;
};

const Context = createContext({} as Context);

export const useContext = () => useReactContext(Context);

export const isLocalStorageDefined = typeof localStorage !== 'undefined' ? localStorage : null;

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(
    isLocalStorageDefined && JSON.parse(localStorage.getItem('shoppingCart') || String(null))
  );

  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>('filterByAll');
  const [productsInitialState, setProductsInitialState] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [dropdownMenuState, setDropdownMenuState] = useState<DropdownMenuState>({
    isDropdownToggled: false,
    sortingBy: 'Organizar por',
  });

  const [paginationState, setPaginationState] = useState<PaginationState>({
    page: 1,
    range: [0, 12],
    buttons: [1, 2, 3, 4, 5],
  });

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        productsInitialState,
        setProductsInitialState,
        paginationState,
        setPaginationState,
        dropdownMenuState,
        setDropdownMenuState,
        selectedCategory,
        setSelectedCategory,
        shoppingCart,
        setShoppingCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
