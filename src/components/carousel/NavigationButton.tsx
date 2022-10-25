import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

import { ChevronLeftLargeIcon, ChevronRightLargeIcon } from '../icons';
import Flex from '../flex';

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
      top="0"
      {...side}
      width="lg"
      height="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      visibility="hidden"
      _groupHover={{ md: { visibility: 'visible' } }}
      aria-label={`${direction} slide`}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="sm"
        width="md"
        height="md"
        backgroundColor="gray.900"
        opacity="40%"
        _hover={{ opacity: '80%' }}
      >
        {direction === 'previous' ? (
          <ChevronLeftLargeIcon color="white" />
        ) : (
          <ChevronRightLargeIcon color="white" />
        )}
      </Flex>
    </chakra.button>
  );
};

export default NavigationButton;
