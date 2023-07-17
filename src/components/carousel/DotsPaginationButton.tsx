import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface DotsButtonProps {
  isCurrent: boolean;
}

const DotsPaginationButton: FC<DotsButtonProps> = ({ isCurrent }) => {
  const { dotsPaginationButton, dotsPaginationButtonActive } =
    useMultiStyleConfig('Carousel');

  return (
    <chakra.span
      __css={isCurrent ? dotsPaginationButtonActive : dotsPaginationButton}
    />
  );
};

export default DotsPaginationButton;
