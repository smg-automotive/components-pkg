import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '../icons';
import Flex from '../flex';

export type Direction = 'previous' | 'next';
interface Props {
  onClick: (direction: Direction) => void;
  direction: Direction;
  fullScreen: boolean;
}

const NavigationButton: FC<Props> = ({ direction, onClick, fullScreen }) => {
  const { button, buttonContainer, icon } = useMultiStyleConfig(
    'Carousel',
    fullScreen ? { variant: 'fullScreen' } : {}
  );
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };

  return (
    <chakra.button
      onClick={() => onClick(direction)}
      {...side}
      aria-label={`${direction} slide`}
      __css={buttonContainer}
    >
      <Flex __css={button}>
        {direction === 'previous' ? (
          <ChevronLeftLargeIcon boxSize={undefined} __css={icon} />
        ) : (
          <ChevronRightLargeIcon boxSize={undefined} __css={icon} />
        )}
      </Flex>
    </chakra.button>
  );
};

export default NavigationButton;
