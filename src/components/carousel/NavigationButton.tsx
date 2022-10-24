import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

import { ChevronDownLargeIcon } from '../icons';

export type Direction = 'previous' | 'next';
interface Props {
  onClick: (direction: Direction) => void;
  direction: Direction;
}

const NavigationButton: FC<Props> = ({ direction, onClick }) => {
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };

  return (
    <chakra.button
      onClick={() => onClick(direction)}
      position="absolute"
      color="white"
      top="0"
      width="lg"
      height="full"
      aria-label={`${direction} slide`}
      {...side}
    >
      <ChevronDownLargeIcon
        transform={
          direction === 'previous' ? 'rotate(90deg)' : 'rotate(-90deg)'
        }
        color="white"
      />
    </chakra.button>
  );
};

export default NavigationButton;
