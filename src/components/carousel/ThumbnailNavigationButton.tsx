import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';
import Flex from '../flex';
import { Direction } from './NavigationButton';

interface Props {
  onClick: () => void;
  direction: Direction;
}

const icons = {
  previous: <ChevronLeftSmallIcon />,
  next: <ChevronRightSmallIcon />,
};

const ThumbnailNavigationButton: FC<Props> = ({ direction, onClick }) => {
  const { paginationButton, paginationIconContainer } = useMultiStyleConfig(
    'Carousel',
    {
      variant: 'fullScreen',
    },
  );
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };

  return (
    <chakra.button
      onClick={onClick}
      {...side}
      aria-label={`scroll to ${direction} thumbnail group`}
      aria-controls="thumbnails-wrapper"
      __css={paginationButton}
    >
      <Flex __css={paginationIconContainer}>{icons[direction]}</Flex>
    </chakra.button>
  );
};

export default ThumbnailNavigationButton;
