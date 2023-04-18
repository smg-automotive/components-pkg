import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
  isCurrent: boolean;
  currentPageNumber: number;
  totalNumbers: number;
}

const NumbersPaginationButton: FC<Props> = ({
  onClick,
  isCurrent,
  currentPageNumber,
  totalNumbers,
}) => {
  const { numbersPaginationButton, numbersPaginationButtonActive } =
    useMultiStyleConfig('Carousel');

  return (
    <chakra.button
      __css={
        isCurrent ? numbersPaginationButtonActive : numbersPaginationButton
      }
      onClick={onClick}
      aria-current={isCurrent}
      aria-label={`numbers pagination ${currentPageNumber} of ${totalNumbers}`}
    >
      {currentPageNumber}
    </chakra.button>
  );
};

export default NumbersPaginationButton;
