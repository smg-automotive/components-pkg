import React, { FC } from 'react';
import {
  chakra,
  Button as ChakraButton,
  ResponsiveValue,
} from '@chakra-ui/react';

import { ChevronRightSmallIcon } from 'src/components/icons';

import { FilterPatternProps } from '../props';

type Variant = 'sm' | 'md';
type Props = Pick<
  FilterPatternProps,
  'label' | 'displayValue' | 'isApplied'
> & { onClick: () => void; variant?: Variant };

const paddingY: Record<Variant, ResponsiveValue<string>> = {
  sm: 'sm',
  md: 'md',
};

const height: Record<Variant, ResponsiveValue<string>> = {
  sm: 'md',
  md: 'lg',
};

export const OpenFilterButton: FC<Props> = ({
  displayValue,
  isApplied,
  label,
  onClick,
  variant = 'md',
}) => {
  return (
    <ChakraButton
      onClick={onClick}
      rightIcon={<ChevronRightSmallIcon color="gray.900" />}
      display="flex"
      justifyContent="space-between"
      w="full"
      h={height[variant]}
      paddingX="0"
      paddingY={paddingY[variant]}
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
