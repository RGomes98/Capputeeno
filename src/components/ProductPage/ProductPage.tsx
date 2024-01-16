import { formatToCurrency } from '@/utils/formatToCurrency';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { BackButton } from '../BackButton/BackButton';
import { useRouter } from 'next/navigation';
import type { Product } from '@/data/mock';

import styles from './ProductPage.module.scss';
import Image from 'next/image';

export const ProductPage = (item: Product) => {
  const { price_in_cents, name, description, image_url } = item;
  const { addShoppingCartItem } = useShoppingCart();
  const [productType] = name.split(' ');
  const { push } = useRouter();

  const handleAddProductToCart = () => {
    push('/carrinho');
    addShoppingCartItem({ ...item, quantity: 1 });
  };

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.mainWrapper}>
        <Image className={styles.productImage} src={image_url} alt={name} width={800} height={800} />
        <div className={styles.productWrapper}>
          <span className={styles.category}>{productType}</span>
          <div className={styles.headingWrapper}>
            <span className={styles.productHeading}>{name}</span>
            <span className={styles.productPrice}>{formatToCurrency(price_in_cents)}</span>
            <p className={styles.shippingText}>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
            </p>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.descriptionHeading}>DESCRIÇÃO</span>
            <p className={styles.description}>{description}</p>
          </div>
          <button onClick={handleAddProductToCart} className={styles.cartBtn}>
            <Image
              className={styles.shoppingBag}
              src='/shopping-bag-white.svg'
              alt='shopping-bag'
              width={24}
              height={24}
            />
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
};
