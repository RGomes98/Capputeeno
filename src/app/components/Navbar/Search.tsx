'use client';

import { useSearchbar } from '@/app/hooks/useSearchbar';

import styles from './Search.module.scss';
import Image from 'next/image';

export const Search = () => {
  const { handleSearchbar } = useSearchbar();

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        onChange={handleSearchbar}
        placeholder='Procurando por algo específico?'
      />
      <Image className={styles.loupe} src='/search-loupe.svg' alt='search-loupe' height={24} width={24} />
    </div>
  );
};
