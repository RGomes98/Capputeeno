import { formatToCurrency } from '@/utils/formatToCurrency';
import type { Product } from '@/data/mock';

import styles from './ProductCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({ id, name, image_url, price_in_cents }: Product) => {
  return (
    <Link className={styles.productCard} href={`produto/${id}`}>
      <Image className={styles.image} src={image_url} alt={name} width={450} height={450} />
      <div className={styles.wrapper}>
        <span className={styles.name}>{name}</span>
        <span className={styles.bar} />
        <span className={styles.price}>{formatToCurrency(price_in_cents)}</span>
      </div>
    </Link>
  );
};
