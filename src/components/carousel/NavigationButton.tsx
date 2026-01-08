import React, { FC } from 'react';
import { chakra, useSlotRecipe } from '@chakra-ui/react';

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '../icons';
import { Flex } from '../flex';

export type Direction = 'previous' | 'next';
interface Props {
  onClick: () => void;
  direction: Direction;
  fullScreen: boolean;
  isHovered?: boolean;
}

export const NavigationButton: FC<Props> = ({
  direction,
  onClick,
  fullScreen,
  isHovered = false,
}) => {
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe(fullScreen ? { variant: 'fullScreen' } : {});
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };
  const icons = {
    previous: <ChevronLeftLargeIcon boxSize={undefined} css={styles.icon} />,
    next: <ChevronRightLargeIcon boxSize={undefined} css={styles.icon} />,
  };
  return (
    <chakra.button
      onClick={onClick}
      aria-label={`${direction} slide`}
      css={{
        ...styles.buttonContainer,
        ...(isHovered ? { visibility: 'visible', pointerEvents: 'auto' } : {}),
        ...side,
      }}
    >
      <Flex css={styles.button}>{icons[direction]}</Flex>
    </chakra.button>
  );
};
