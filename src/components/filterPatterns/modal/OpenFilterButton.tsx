import React, { FC } from 'react';
import { chakra, Button as ChakraButton } from '@chakra-ui/react';

import { ChevronRightSmallIcon } from 'src/components/icons';

import { FilterPatternProps } from '../props';

type Props = Pick<
  FilterPatternProps,
  'label' | 'displayValue' | 'isApplied'
> & { onClick: () => void; paddingY?: 'sm' | 'md' };

export const OpenFilterButton: FC<Props> = ({
  displayValue,
  isApplied,
  label,
  onClick,
  paddingY = 'md',
}) => {
  return (
    <ChakraButton
      onClick={onClick}
      rightIcon={<ChevronRightSmallIcon color="gray.900" />}
      display="flex"
      justifyContent="space-between"
      w="full"
      h="lg"
      paddingX="0"
      paddingY={paddingY}
      color="gray.900"
    >
      <chakra.span
        display="flex"
        justifyContent="space-between"
        w="full"
        minW="0"
      >
        <chakra.span mr="2xl" whiteSpace="nowrap">
          {label}
        </chakra.span>
        <chakra.span
          fontWeight="bold"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {displayValue && isApplied ? displayValue : null}
        </chakra.span>
      </chakra.span>
    </ChakraButton>
  );
};
