import { useRouter } from 'next/navigation';

import styles from './BackButton.module.scss';
import Image from 'next/image';

export const BackButton = () => {
  const { back } = useRouter();

  return (
    <button onClick={back} className={styles.backLink}>
      <Image className={styles.back} src='/back.svg' alt='back' width={24} height={24} /> Voltar
    </button>
  );
};
