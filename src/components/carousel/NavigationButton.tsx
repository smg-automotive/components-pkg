import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '../icons';
import Flex from '../flex';

export type Direction = 'previous' | 'next';
interface Props {
  onClick: () => void;
  direction: Direction;
  fullScreen: boolean;
}

const NavigationButton: FC<Props> = ({ direction, onClick, fullScreen }) => {
  const { button, buttonContainer, icon } = useMultiStyleConfig(
    'Carousel',
    fullScreen ? { variant: 'fullScreen' } : {},
  );
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };
  const icons = {
    previous: <ChevronLeftLargeIcon boxSize={undefined} __css={icon} />,
    next: <ChevronRightLargeIcon boxSize={undefined} __css={icon} />,
  };
  return (
    <chakra.button
      onClick={onClick}
      {...side}
      aria-label={`${direction} slide`}
      __css={buttonContainer}
    >
      <Flex __css={button}>{icons[direction]}</Flex>
    </chakra.button>
  );
};

export default NavigationButton;
