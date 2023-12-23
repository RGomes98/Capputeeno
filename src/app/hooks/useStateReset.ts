import { useContext } from '../context/Context';

type UseStateReset = ('Pagination' | 'Dropdown')[];

export const useStateReset = () => {
  const { setPaginationState, setDropdownMenuState } = useContext();

  const stateResetInitialValues = {
    Pagination: () =>
      setPaginationState(() => ({
        page: 1,
        range: [0, 12],
        buttons: [1, 2, 3, 4, 5],
      })),
    Dropdown: () =>
      setDropdownMenuState(() => ({
        isDropdownToggled: false,
        sortingBy: 'Organizar por',
      })),
  };

  const stateReset = (toReset: UseStateReset) => {
    toReset.forEach((state) => {
      stateResetInitialValues[state]?.();
    });
  };

  return { stateReset };
};
