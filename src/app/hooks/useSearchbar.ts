import { useContext } from '../context/Context';
import { useStateReset } from './useStateReset';

export const useSearchbar = () => {
  const { productsInitialState, setProducts } = useContext();
  const { stateReset } = useStateReset();

  const handleSearchbar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: search } = event.target;

    stateReset(['Category', 'Pagination', 'Dropdown']);

    setProducts(() =>
      productsInitialState.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return { handleSearchbar };
};
