import React, { FC } from 'react';
import { chakra, useSlotRecipe } from '@chakra-ui/react';

import { ChevronLeftSmallIcon, ChevronRightSmallIcon } from '../icons';
import { Flex } from '../flex';
import { Direction } from './NavigationButton';

interface Props {
  onClick: () => void;
  direction: Direction;
}

const icons = {
  previous: <ChevronLeftSmallIcon />,
  next: <ChevronRightSmallIcon />,
};

export const ThumbnailNavigationButton: FC<Props> = ({
  direction,
  onClick,
}) => {
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe({ variant: 'fullScreen' });
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };

  return (
    <chakra.button
      onClick={onClick}
      aria-label={`scroll to ${direction} thumbnail group`}
      aria-controls="thumbnails-wrapper"
      css={{ ...styles.paginationButton, ...side }}
    >
      <Flex css={styles.paginationIconContainer}>{icons[direction]}</Flex>
    </chakra.button>
  );
};
