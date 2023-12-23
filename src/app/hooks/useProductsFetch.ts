import { useContext } from '../context/Context';
import type { API_URL } from '../utils/API_URL';
import type { Product } from '../data/mock';
import { useEffect, useState } from 'react';

export const useProductsFetch = ({ protocol, host }: API_URL) => {
  const { products, productsInitialState, setProducts, setProductsInitialState } = useContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productsInitialState.length) return;

    (async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${protocol}://${host}/api/products`, { method: 'GET' });
        const data: Product[] = await response.json();

        setProducts(data);
        setProductsInitialState(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, [host, protocol, productsInitialState, setProducts, setProductsInitialState]);

  return { products, isLoading };
};
