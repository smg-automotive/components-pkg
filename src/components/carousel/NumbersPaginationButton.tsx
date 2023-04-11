import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
  isCurrent: boolean;
  numbersIndex: number;
  totalNumbers: number;
}

const NumbersPaginationButton: FC<Props> = ({
  onClick,
  isCurrent,
  numbersIndex,
  totalNumbers,
}) => {
  const { numbersPaginationButton, numbersPaginationButtonActive } =
    useMultiStyleConfig('Carousel');

  const currentNumber = numbersIndex + 1;

  return (
    <chakra.button
      __css={
        isCurrent ? numbersPaginationButtonActive : numbersPaginationButton
      }
      onClick={onClick}
      aria-current={isCurrent}
      aria-label={`numbers pagination ${currentNumber} of ${totalNumbers}`}
    >
      {currentNumber}
    </chakra.button>
  );
};

export default NumbersPaginationButton;
