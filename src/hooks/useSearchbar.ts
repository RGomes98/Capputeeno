import { usePathname, useRouter } from 'next/navigation';
import { useContext } from '../context/Context';
import { useStateReset } from './useStateReset';

export const useSearchbar = () => {
  const { productsInitialState, setProducts } = useContext();
  const { stateReset } = useStateReset();
  const { push } = useRouter();
  const path = usePathname();

  const isAtHome = path === '/';

  const handleSearchbar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: search } = event.target;

    if (!isAtHome) push('/');
    stateReset(['Category', 'Pagination', 'Dropdown']);

    setProducts(() =>
      productsInitialState.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return { handleSearchbar };
};
