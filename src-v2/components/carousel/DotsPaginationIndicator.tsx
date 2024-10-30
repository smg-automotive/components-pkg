import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface DotsButtonProps {
  isCurrent: boolean;
}

const DotsPaginationIndicator: FC<DotsButtonProps> = ({ isCurrent }) => {
  const { dotsPaginationIndicator, dotsPaginationIndicatorActive } =
    useMultiStyleConfig('Carousel');

  return (
    <chakra.span
      __css={
        isCurrent ? dotsPaginationIndicatorActive : dotsPaginationIndicator
      }
    />
  );
};

export default DotsPaginationIndicator;
