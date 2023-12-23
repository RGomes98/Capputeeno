'use client';

import { ProductGridPlaceholder } from './ProductGridPlaceholder';
import { useProductsFetch } from '@/app/hooks/useProductsFetch';
import type { API_URL } from '@/app/utils/API_URL';
import { useContext } from '@/app/context/Context';
import { ProductCard } from './ProductCard';

import styles from './ProductGrid.module.scss';

export const ProductGrid = ({ protocol, host }: API_URL) => {
  const { products, isLoading } = useProductsFetch({ protocol, host });
  const { paginationState } = useContext();

  const [pageRangeFirstIndex, pageRangeSecondIndex] = paginationState.range;

  return (
    <div className={styles.productGrid}>
      <ProductGridPlaceholder isLoading={isLoading} productsLength={products.length} />
      {products
        .slice(pageRangeFirstIndex, pageRangeSecondIndex)
        .map(({ id, name, image_url, price_in_cents }) => (
          <ProductCard key={id} id={id} name={name} image={image_url} price={price_in_cents / 100} />
        ))}
    </div>
  );
};
