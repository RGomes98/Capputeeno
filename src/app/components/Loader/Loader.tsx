import styles from './Loader.module.scss';
import Image from 'next/image';

export const Loader = () => {
  return <Image className={styles.loader} src='/3-dots-move.svg' alt='loader' width={75} height={75} />;
};
