import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface DotsButtonProps {
  onClick: () => void;
  isCurrent: boolean;
  currentDot: number;
}

const DotsPaginationButton: FC<DotsButtonProps> = ({
  onClick,
  isCurrent,
  currentDot,
}) => {
  const { dotsPaginationButton, dotsPaginationButtonActive } =
    useMultiStyleConfig('Carousel');

  return (
    <chakra.button
      __css={isCurrent ? dotsPaginationButtonActive : dotsPaginationButton}
      onClick={onClick}
      aria-current={isCurrent}
      aria-label={`selected dot ${currentDot}`}
    />
  );
};

export default DotsPaginationButton;
