'use client';

import { ProductGridPlaceholder } from './ProductGridPlaceholder';
import type { GetHostSettings } from '@/utils/getHostSettings';
import { useProductsFetch } from '@/hooks/useProductsFetch';
import { useContext } from '@/context/Context';
import { ProductCard } from './ProductCard';

import styles from './ProductGrid.module.scss';

export const ProductGrid = ({ protocol, host }: GetHostSettings) => {
  const { products, isLoading } = useProductsFetch({ protocol, host });
  const { paginationState } = useContext();

  const [pageRangeFirstIndex, pageRangeSecondIndex] = paginationState.range;

  return (
    <div className={styles.productGrid}>
      <ProductGridPlaceholder isLoading={isLoading} productsLength={products.length} />
      {products.slice(pageRangeFirstIndex, pageRangeSecondIndex).map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
