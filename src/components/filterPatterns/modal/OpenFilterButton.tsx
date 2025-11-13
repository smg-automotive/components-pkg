import React, { FC } from 'react';
import {
  ButtonGroup,
  ButtonProps,
  chakra,
  Button as ChakraButton,
  IconButton,
  ResponsiveValue,
} from '@chakra-ui/react';

import {
  ChevronRightSmallIcon,
  CloseIcon,
  DeleteIcon,
} from 'src/components/icons';

import { FilterPatternProps } from '../props';

export type PaddingX = '0' | 'md';
export type ResetButtonVariant = 'circle' | 'square';
type Variant = 'sm' | 'md';
type Props = Pick<
  FilterPatternProps,
  'label' | 'displayValue' | 'Icon' | 'isApplied'
> &
  Pick<ButtonProps, 'backgroundColor' | 'color'> & {
    onClick: () => void;
    variant?: Variant;
    isDisabled?: boolean;
    height?: ResponsiveValue<string>;
    paddingX?: PaddingX;
    showResetButton?: boolean;
    resetButtonVariant?: ResetButtonVariant;
    resetButtonAriaLabel?: string;
    onResetFilter?: () => void;
  };

const heightFromVariant: Record<Variant, ResponsiveValue<string>> = {
  sm: 'md',
  md: 'lg',
};

export const OpenFilterButton: FC<Props> = ({
  displayValue,
  Icon,
  isApplied,
  label,
  onClick,
  variant = 'md',
  isDisabled = false,
  height,
  paddingX = '0',
  backgroundColor = 'unset',
  color,
  showResetButton = true,
  resetButtonVariant = 'circle',
  resetButtonAriaLabel = 'Reset filter',
  onResetFilter,
}) => {
  const shouldDisplayResetButton =
    showResetButton && isApplied && !!onResetFilter;

  const iconColor = isDisabled ? 'gray.300' : color || 'gray.500';

  const mainButtonRightPadding = resetButtonVariant === 'circle' ? '0' : 'md';

  const resetButtonConfig = {
    circle: {
      icon: <DeleteIcon color={iconColor} />,
      paddingLeft: 'sm',
    },
    square: {
      icon: <CloseIcon color={iconColor} />,
      borderLeftColor: 'white',
      borderLeftWidth: '1px',
      paddingLeft: 'md',
    },
  }[resetButtonVariant];

  return (
    <ButtonGroup
      h={height ?? heightFromVariant[variant]}
      isAttached
      w="full"
      maxW="full"
      backgroundColor={backgroundColor}
    >
      <ChakraButton
        flex="1"
        minW="0"
        h="full"
        paddingLeft={paddingX}
        paddingRight={
          shouldDisplayResetButton ? mainButtonRightPadding : paddingX
        }
        isDisabled={isDisabled}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        color={color || (isDisabled ? 'gray.300' : 'gray.900')}
        rightIcon={
          shouldDisplayResetButton ? undefined : (
            <ChevronRightSmallIcon color={iconColor} />
          )
        }
        onClick={onClick}
      >
        <chakra.span
          display="flex"
          justifyContent="space-between"
          w="full"
          minW="0"
        >
          <chakra.span
            mr="2xl"
            whiteSpace="nowrap"
            display="flex"
            alignItems="center"
            flexShrink={0}
          >
            {label}
            {Icon ? <Icon h="xs" w="xs" ml="xs" /> : null}
          </chakra.span>
          <chakra.span
            fontWeight="bold"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            minW="0"
            flex="1"
            textAlign="right"
          >
            {displayValue && isApplied ? displayValue : null}
          </chakra.span>
        </chakra.span>
      </ChakraButton>
      {shouldDisplayResetButton ? (
        <IconButton
          aria-label={resetButtonAriaLabel}
          h="full"
          paddingRight={paddingX}
          isDisabled={isDisabled}
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          onClick={onResetFilter}
          {...resetButtonConfig}
        />
      ) : null}
    </ButtonGroup>
  );
};
