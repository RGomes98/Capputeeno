import type { CartItem as CartItemType } from '@/app/context/Context';
import { formatToCurrency } from '@/app/utils/formatToCurrency';
import { useShoppingCart } from '@/app/hooks/useShoppingCart';

import styles from './CartItem.module.scss';
import Image from 'next/image';

export const CartItem = (item: CartItemType) => {
  const { updateShoppingCartItem, removeShoppingCartItem } = useShoppingCart();
  const { id, image_url, name, description, quantity, price_in_cents } = item;
  const options = [1, 2, 3, 4, 5];

  const handleUpdateItemQuantity = (event: React.ChangeEvent<HTMLSelectElement>, item: CartItemType) => {
    const { value } = event.target;
    const quantity = Number(value);

    if (!options.includes(quantity)) return;
    updateShoppingCartItem({ ...item, quantity });
  };

  return (
    <div key={id} className={styles.product}>
      <Image className={styles.productImage} src={image_url} alt={name} width={356} height={356} />
      <div className={styles.productDetails}>
        <div className={styles.productHeadingWrapper}>
          <span className={styles.productHeading}>{name}</span>
          <button onClick={() => removeShoppingCartItem(item)} className={styles.deleteBtn}>
            <Image className={styles.delete} src='/trash.svg' alt='delete' width={24} height={24} />
          </button>
        </div>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productOptionsWrapper}>
          <select
            className={styles.productsOptions}
            value={quantity}
            onChange={(event) => handleUpdateItemQuantity(event, item)}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className={styles.productPrice}>{formatToCurrency(price_in_cents)}</span>
        </div>
      </div>
    </div>
  );
};
