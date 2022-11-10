import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import { Direction } from './NavigationButton';
import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';
import Flex from '../flex';

interface Props {
  onClick: (direction: Direction) => void;
  direction: Direction;
}

const icons = {
  previous: <ChevronLeftSmallIcon />,
  next: <ChevronRightSmallIcon />,
};

const ThumbnailNavigationButton: FC<Props> = ({ direction, onClick }) => {
  const { paginationButton } = useMultiStyleConfig('Carousel', {
    variant: 'fullScreen',
  });
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };

  return (
    <chakra.button
      onClick={() => onClick(direction)}
      {...side}
      aria-label={`scroll to ${direction} thumbnails`}
      __css={paginationButton}
    >
      <Flex>{icons[direction]}</Flex>
    </chakra.button>
  );
};

export default ThumbnailNavigationButton;
