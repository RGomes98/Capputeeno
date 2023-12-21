'use client';

import { useProductsFetch } from '@/app/hooks/useProductsFetch';
import type { API_URL } from '@/app/utils/API_URL';
import { useContext } from '@/app/context/Context';
import { ProductCard } from './ProductCard';

import styles from './ProductGrid.module.scss';

export const ProductGrid = ({ protocol, host }: API_URL) => {
  const { products, paginationState } = useContext();
  const [pageRangeFirstIndex, pageRangeSecondIndex] = paginationState.range;
  const { isLoading } = useProductsFetch({ protocol, host });

  if (isLoading) return <span>Loading...</span>;
  if (!products.length) return <span>Nenhum produto encontrado!</span>;

  return (
    <div className={styles.productGrid}>
      {products
        .slice(pageRangeFirstIndex, pageRangeSecondIndex)
        .map(({ id, name, image_url, price_in_cents }) => (
          <ProductCard key={id} id={id} name={name} image={image_url} price={price_in_cents / 100} />
        ))}
    </div>
  );
};
