import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface DotsButtonProps {
  onClick: () => void;
  isCurrent: boolean;
  currentDot: number;
  totalDots: number;
}

const DotsPaginationButton: FC<DotsButtonProps> = ({
  onClick,
  isCurrent,
  currentDot,
  totalDots,
}) => {
  const {
    dotsPaginationButton,
    dotsPaginationButtonActive,
    dotsPaginationButtonWrapper,
  } = useMultiStyleConfig('Carousel');

  return (
    <chakra.button
      __css={dotsPaginationButtonWrapper}
      onClick={onClick}
      aria-current={isCurrent}
      aria-label={`slide indicator ${currentDot} of ${totalDots}`}
    >
      <chakra.span
        __css={isCurrent ? dotsPaginationButtonActive : dotsPaginationButton}
      />
    </chakra.button>
  );
};

export default DotsPaginationButton;
