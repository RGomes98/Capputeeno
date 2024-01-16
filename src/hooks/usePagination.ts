import { useContext } from '../context/Context';

export const usePagination = () => {
  const { products, paginationState, setPaginationState } = useContext();

  const ITEMS_PER_PAGE = 12;
  const PAGES_AMOUNT = Math.ceil(products.length / ITEMS_PER_PAGE);

  const isPaginationAtEnd = paginationState.buttons.some((pageNumber) => pageNumber >= PAGES_AMOUNT);
  const isPaginationAtStart = paginationState.buttons.some((pageNumber) => pageNumber <= 1);

  const handlePaginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    const clickedButtonPageNumber = Number(id);
    const isClickedButtonDisabled = PAGES_AMOUNT < clickedButtonPageNumber;

    if (isClickedButtonDisabled) return;

    const pageRangeFirstIndex = ITEMS_PER_PAGE * clickedButtonPageNumber - ITEMS_PER_PAGE;
    const pageRangeLastIndex = ITEMS_PER_PAGE * clickedButtonPageNumber;

    setPaginationState((paginationState) => ({
      ...paginationState,
      page: clickedButtonPageNumber,
      range: [pageRangeFirstIndex, pageRangeLastIndex],
    }));
  };

  const handlePaginationSlide = (action: number) => {
    const isPaginationAtTheStart = isPaginationAtStart && action === -1;
    const isPaginationAtTheEnd = isPaginationAtEnd && action === +1;

    if (isPaginationAtTheStart || isPaginationAtTheEnd) return;

    setPaginationState((paginationState) => {
      const pageRangeFirstIndex = ITEMS_PER_PAGE * (paginationState.page + action) - ITEMS_PER_PAGE;
      const pageRangeLastIndex = ITEMS_PER_PAGE * (paginationState.page + action);

      return {
        page: paginationState.page + action,
        range: [pageRangeFirstIndex, pageRangeLastIndex],
        buttons: [...paginationState.buttons.map((pageNumber) => pageNumber + action)],
      };
    });
  };

  return {
    handlePaginationClick,
    handlePaginationSlide,
    isPaginationAtEnd,
    isPaginationAtStart,
    pagesAmount: PAGES_AMOUNT,
    paginationButtons: paginationState['buttons'],
    currentPage: products.length ? paginationState['page'] : 0,
  };
};
