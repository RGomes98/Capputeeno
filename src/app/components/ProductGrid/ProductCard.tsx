import styles from './ProductCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type ProductCard = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export const ProductCard = ({ id, name, image, price }: ProductCard) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

  return (
    <Link className={styles.productCard} href={`produto/${id}`}>
      <Image className={styles.image} src={image} alt={name} width={1000} height={1000} />
      <div className={styles.wrapper}>
        <span className={styles.name}>{name}</span>
        <span className={styles.bar} />
        <span className={styles.price}>{formattedPrice}</span>
      </div>
    </Link>
  );
};
