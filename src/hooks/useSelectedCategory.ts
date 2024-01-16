import { useContext } from '../context/Context';
import { useStateReset } from './useStateReset';
import type { Product } from '../data/mock';

export const useSelectedCategory = () => {
  const { productsInitialState, selectedCategory, setProducts, setSelectedCategory } = useContext();
  const { stateReset } = useStateReset();

  const handleSelectedCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id: filterBy } = <{ id: typeof selectedCategory }>event.currentTarget;

    const filteringFunctions: Record<string, () => Product[]> = {
      filterByAll: () => productsInitialState,
      filterByTShirts: () => productsInitialState.filter(({ category }) => category === 't-shirts'),
      filterByMugs: () => productsInitialState.filter(({ category }) => category === 'mugs'),
    };

    setSelectedCategory(filterBy);
    stateReset(['Pagination', 'Dropdown']);
    setProducts(filteringFunctions[filterBy]?.());
  };

  return { selectedCategory, handleSelectedCategory };
};
