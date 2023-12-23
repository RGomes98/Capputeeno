import { Saira_Stencil_One } from 'next/font/google';
import { Search } from './Search';
import { Cart } from './Cart';

import styles from './Navbar.module.scss';

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
        <h1 className={`${styles.heading} ${sairaStencilOne.className}`}>Capputeeno</h1>
        <div className={styles.secondaryWrapper}>
          <Search />
          <Cart />
        </div>
      </div>
    </nav>
  );
};
