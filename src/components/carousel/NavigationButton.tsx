import React, { FC } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

import {
  ChevronLeftLargeIcon,
  ChevronLeftSmallIcon,
  ChevronRightLargeIcon,
  ChevronRightSmallIcon,
} from '../icons';
import Flex from '../flex';

export type Direction = 'previous' | 'next';
interface Props {
  onClick: (direction: Direction) => void;
  direction: Direction;
  variant: 'default' | 'fullScreen' | 'pagination';
}

const NavigationButton: FC<Props> = ({ direction, onClick, variant }) => {
  const styleVariant = {
    default: {},
    fullScreen: { variant: 'fullScreen' },
    pagination: { variant: 'fullScreen' },
  };

  const { button, buttonContainer, icon, paginationButton } =
    useMultiStyleConfig('Carousel', styleVariant[variant]);
  const side = direction === 'previous' ? { left: '0' } : { right: '0' };
  const icons = {
    previous: {
      default: <ChevronLeftLargeIcon boxSize={undefined} __css={icon} />,
      fullScreen: <ChevronLeftLargeIcon boxSize={undefined} __css={icon} />,
      pagination: <ChevronLeftSmallIcon />,
    },
    next: {
      default: <ChevronRightLargeIcon boxSize={undefined} __css={icon} />,
      fullScreen: <ChevronRightLargeIcon boxSize={undefined} __css={icon} />,
      pagination: <ChevronRightSmallIcon />,
    },
  };
  return (
    <chakra.button
      onClick={() => onClick(direction)}
      {...side}
      aria-label={`${direction} slide`}
      __css={variant === 'pagination' ? paginationButton : buttonContainer}
    >
      <Flex __css={variant === 'pagination' ? {} : button}>
        {icons[direction][variant]}
      </Flex>
    </chakra.button>
  );
};

export default NavigationButton;
