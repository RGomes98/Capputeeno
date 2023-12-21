import { useContext } from '../context/Context';

export const useSearchbar = () => {
  const { productsInitialState, setProducts, setPaginationState, setDropdownMenuState, setSelectedCategory } =
    useContext();

  const handleSearchbar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: search } = event.target;

    setSelectedCategory('filterByAll');

    setPaginationState(() => ({
      page: 1,
      range: [0, 12],
      buttons: [1, 2, 3, 4, 5],
    }));

    setDropdownMenuState(() => ({
      isDropdownToggled: false,
      sortingBy: 'Organizar por',
    }));

    setProducts(() =>
      productsInitialState.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return { handleSearchbar };
};
