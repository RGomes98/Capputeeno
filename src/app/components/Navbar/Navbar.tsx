import { sairaStencilOne } from '@/app/layout';
import { Search } from './Search';
import { Cart } from './Cart';

import styles from './Navbar.module.scss';

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
