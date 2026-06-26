import React, { FC } from 'react';
import { chakra, useSlotRecipe } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
  isCurrent: boolean;
  currentPageNumber: number;
  totalNumbers: number;
}

export const NumbersPaginationButton: FC<Props> = ({
  onClick,
  isCurrent,
  currentPageNumber,
  totalNumbers,
}) => {
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe();

  return (
    <chakra.button
      css={styles.numbersPaginationButton}
      onClick={onClick}
      aria-current={isCurrent}
      aria-label={`numbers pagination ${currentPageNumber} of ${totalNumbers}`}
    >
      {currentPageNumber}
    </chakra.button>
  );
};
