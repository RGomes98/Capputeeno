import { Saira_Stencil_One } from 'next/font/google';
import { Search } from './Search';
import { Cart } from './Cart';

import styles from './Navbar.module.scss';
import Link from 'next/link';

const sairaStencilOne = Saira_Stencil_One({
  display: 'swap',
  style: 'normal',
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['system-ui', 'sans-serif'],
});

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.primaryWrapper}>
        <Link href='/' className={`${styles.heading} ${sairaStencilOne.className}`}>
          Capputeeno
        </Link>
        <div className={styles.secondaryWrapper}>
          <Search />
          <Cart />
        </div>
      </div>
    </nav>
  );
};
