import { useContext } from '../context/Context';
import { useStateReset } from './useStateReset';

export const useSearchbar = () => {
  const { productsInitialState, setProducts, setSelectedCategory } = useContext();
  const { stateReset } = useStateReset();

  const handleSearchbar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: search } = event.target;

    setSelectedCategory('filterByAll');
    stateReset(['Pagination', 'Dropdown']);

    setProducts(() =>
      productsInitialState.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return { handleSearchbar };
};
