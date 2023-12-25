import { getElementConditionalStyles } from '@/app/utils/getElementConditionalStyles';

import styles from './PaginationButton.module.scss';

type PaginationButton = {
  buttonIndex: number;
  currentPage: number;
  pagesAmount: number;
  handlePaginationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const PaginationButton = ({
  buttonIndex,
  currentPage,
  pagesAmount,
  handlePaginationClick,
}: PaginationButton) => {
  return (
    <button
      id={String(buttonIndex)}
      onClick={(event) => handlePaginationClick(event)}
      className={`${styles.button}
      ${getElementConditionalStyles('equality', buttonIndex, currentPage, styles.enabled)}
      ${getElementConditionalStyles('relational', buttonIndex, pagesAmount, styles.disabled)}`}
    >
      {buttonIndex}
    </button>
  );
};
