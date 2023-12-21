import styles from './Cart.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Cart = () => {
  return (
    <Link className={styles.link} href='/carrinho'>
      <Image
        className={styles.logo}
        src='/shopping-bag.svg'
        alt='shopping-bag'
        width={24}
        height={24}
      />
      <span className={styles.count}>0</span>
    </Link>
  );
};
