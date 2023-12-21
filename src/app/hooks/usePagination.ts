import { useContext } from '../context/Context';

export const usePagination = () => {
  const { products, paginationState, setPaginationState } = useContext();

  const ITEMS_PER_PAGE = 12;
  const PAGES_AMOUNT = Math.floor(products.length / ITEMS_PER_PAGE);

  const handlePaginationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    const currentPage = Number(id);
    const isButtonDisabled = PAGES_AMOUNT < currentPage;

    if (isButtonDisabled) return;

    const pageRangeFirstIndex = ITEMS_PER_PAGE * currentPage - ITEMS_PER_PAGE;
    const pageRangeLastIndex = ITEMS_PER_PAGE * currentPage;

    setPaginationState((paginationState) => ({
      ...paginationState,
      page: currentPage,
      range: [pageRangeFirstIndex, pageRangeLastIndex],
    }));
  };

  const handlePaginationSlide = (action: number) => {
    const isPaginationAtEnd = paginationState.buttons.some((n) => n >= PAGES_AMOUNT) && action > 0;
    const isPaginationAtStart = paginationState.buttons.some((n) => n <= 1) && action < 0;

    if (isPaginationAtStart || isPaginationAtEnd) return;

    setPaginationState((paginationState) => {
      const pageRangeFirstIndex = ITEMS_PER_PAGE * (paginationState.page + action) - ITEMS_PER_PAGE;
      const pageRangeLastIndex = ITEMS_PER_PAGE * (paginationState.page + action);

      return {
        page: paginationState.page + action,
        range: [pageRangeFirstIndex, pageRangeLastIndex],
        buttons: [...paginationState.buttons.map((n) => n + action)],
      };
    });
  };

  return {
    handlePaginationClick,
    handlePaginationSlide,
    currentPage: paginationState['page'],
    paginationButtons: paginationState['buttons'],
  };
};
