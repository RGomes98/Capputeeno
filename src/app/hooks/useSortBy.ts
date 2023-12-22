import { useContext } from '../context/Context';
import type { Product } from '../data/mock';

export const useSortBy = () => {
  const { products, dropdownMenuState, setProducts, setDropdownMenuState } = useContext();

  const handleSortBy = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id: sortBy } = event.currentTarget;
    const isSortByInitial = sortBy === 'initial';

    setDropdownMenuState((dropdownMenuState) => ({
      ...dropdownMenuState,
      isDropdownToggled: isSortByInitial ? !dropdownMenuState['isDropdownToggled'] : false,
    }));

    if (isSortByInitial) return;

    const sortingByCases: Record<string, (typeof dropdownMenuState)['sortingBy']> = {
      latestArrival: 'Novidades',
      highestPrice: 'Preço: Maior - menor',
      lowestPrice: 'Preço: Menor - maior',
      bestSeller: 'Mais vendidos',
    };

    const sortingFunctions: Record<string, (a: Product, b: Product) => number> = {
      latestArrival: (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      highestPrice: (a, b) => b.price_in_cents - a.price_in_cents,
      lowestPrice: (a, b) => a.price_in_cents - b.price_in_cents,
      bestSeller: (a, b) => b.sales - a.sales,
    };

    setDropdownMenuState((dropdownMenuState) => ({
      ...dropdownMenuState,
      sortingBy: sortingByCases[sortBy],
    }));

    setProducts((products) => products.toSorted(sortingFunctions[sortBy]));
  };

  return {
    handleSortBy,
    isProductsEmpty: !products.length,
    currentSortOrder: dropdownMenuState['sortingBy'],
    isDropdownToggled: dropdownMenuState['isDropdownToggled'],
  };
};
