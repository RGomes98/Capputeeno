'use client';

import { useProductsFetch } from '@/app/hooks/useProductsFetch';
import { useMounted } from '@/app/hooks/useMounted';
import type { API_URL } from '@/app/utils/API_URL';
import { useContext } from '@/app/context/Context';
import { ProductCard } from './ProductCard';

import styles from './ProductGrid.module.scss';

export const ProductGrid = ({ protocol, host }: API_URL) => {
  const { products, isLoading } = useProductsFetch({ protocol, host });
  const { paginationState } = useContext();
  const { isMounted } = useMounted();

  const [pageRangeFirstIndex, pageRangeSecondIndex] = paginationState.range;

  if (isLoading) return <span>Loading...</span>;
  if (isMounted && !products.length) return <span>Nenhum produto encontrado!</span>;

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
