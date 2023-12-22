import { useContext } from '../context/Context';
import type { Product } from '../data/mock';

export const useSelectedCategory = () => {
  const {
    productsInitialState,
    selectedCategory,
    setProducts,
    setPaginationState,
    setSelectedCategory,
    setDropdownMenuState,
  } = useContext();

  const handleSelectedCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id: filterBy } = <{ id: typeof selectedCategory }>event.currentTarget;

    setPaginationState(() => ({
      page: 1,
      range: [0, 12],
      buttons: [1, 2, 3, 4, 5],
    }));

    setDropdownMenuState(() => ({
      isDropdownToggled: false,
      sortingBy: 'Organizar por',
    }));

    const filteringFunctions: Record<string, () => Product[]> = {
      filterByAll: () => productsInitialState,
      filterByTShirts: () => productsInitialState.filter(({ category }) => category === 't-shirts'),
      filterByMugs: () => productsInitialState.filter(({ category }) => category === 'mugs'),
    };

    setSelectedCategory(filterBy);
    setProducts(filteringFunctions[filterBy]?.());
  };

  return { selectedCategory, handleSelectedCategory };
};
