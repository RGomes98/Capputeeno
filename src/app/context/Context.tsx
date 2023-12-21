'use client';

import { useState, createContext, useContext as useReactContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Product } from '../data/mock';

type PaginationState = { page: number; range: number[]; buttons: number[] };
type SelectedCategory = 'filterByAll' | 'filterByTShirts' | 'filterByMugs';
type DropdownMenuState = { isDropdownToggled: boolean; sortingBy: string };
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
};

const Context = createContext({} as Context);

export const useContext = () => useReactContext(Context);

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
