import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface DotsButtonProps {
  isCurrent: boolean;
  currentDot: number;
  totalDots: number;
}

const DotsPaginationButton: FC<DotsButtonProps> = ({
  isCurrent,
  currentDot,
  totalDots,
}) => {
  const { dotsPaginationButton, dotsPaginationButtonActive } =
    useMultiStyleConfig('Carousel');

  return (
    <chakra.span
      __css={isCurrent ? dotsPaginationButtonActive : dotsPaginationButton}
      aria-current={isCurrent}
      aria-label={`slide indicator ${currentDot} of ${totalDots}`}
    />
  );
};

export default DotsPaginationButton;
