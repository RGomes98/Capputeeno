import { convertToCurrency } from '@/app/utils/convertToCurrency';
import { Product } from '@/app/data/mock';

import styles from './ProductPage.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const ProductPage = ({ name, price_in_cents, description, category, image_url }: Product) => {
  const firstName = name.split(' ')[0];

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.backLink}>
        <Image className={styles.back} src='/back.svg' alt='back' width={24} height={24} /> Voltar
      </Link>
      <div className={styles.mainWrapper}>
        <Image className={styles.productImage} src={image_url} alt={name} width={800} height={800} />
        <div className={styles.productWrapper}>
          <span className={styles.category}>{firstName}</span>
          <div className={styles.headingWrapper}>
            <span className={styles.productHeading}>{name}</span>
            <span className={styles.productPrice}>{convertToCurrency(price_in_cents)}</span>
            <p className={styles.shippingText}>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
            </p>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.descriptionHeading}>DESCRIÇÃO</span>
            <p className={styles.description}>{description}</p>
          </div>
          <button className={styles.cartBtn}>
            <Image
              className={styles.shoppingBag}
              src='/shopping-bag-white.svg'
              alt='shopping-bag'
              width={24}
              height={24}
            />
            <span className={styles.cartBtnText}>ADICIONAR AO CARRINHO</span>
          </button>
        </div>
      </div>
    </div>
  );
};
