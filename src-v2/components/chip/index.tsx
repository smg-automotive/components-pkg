import React, { FC, PropsWithChildren } from 'react';
import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';

import { CheckmarkIcon } from '../icons/index';

export type ChipProps = {
  isDisabled?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  href?: string;
  'aria-label'?: string;
} & Pick<FlexProps, 'as'>;

const getChipStyles = (isActive?: boolean) => {
  if (isActive) {
    return {
      bg: 'blue.100',
      color: 'gray.900',
      border: '1px solid transparent',
      _hover: { bg: 'blue.50' },
      _active: { bg: 'blue.200' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'blue.300',
        outlineOffset: 0,
      },
    };
  }

  return {
    bg: 'white',
    color: 'gray.900',
    border: '1px solid',
    borderColor: 'gray.200',
    _hover: {
      bg: 'white',
      borderColor: 'black',
    },
    _active: {
      bg: 'gray.100',
      borderColor: 'gray.200',
    },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'blue.300',
      outlineOffset: 0,
    },
  };
};

const Chip: FC<PropsWithChildren<ChipProps>> = ({
  children,
  isDisabled = false,
  onClick,
  isActive,
  href,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const chipStyles = getChipStyles(isActive);

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isDisabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.();
    }
  };

  const commonProps = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 'full',
    transition: 'background-color 0.2s',
    outline: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.4 : 1,
    px: isActive ? 'md' : '2xl',
    py: 'sm',
    minH: 8,
    width: 'max-content',
    flexShrink: 0,
    'aria-label': ariaLabel,
    ...chipStyles,
    ...rest,
  };

  const isLink = Boolean(href);
  const asType = isLink ? 'a' : 'button';

  return (
    <Flex
      as={asType}
      href={isLink && !isDisabled ? href : undefined}
      type={!isLink ? 'button' : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={isDisabled ? -1 : 0}
      {...commonProps}
    >
      {isActive ? (
        <Box
          mx="xs"
          color="currentColor"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CheckmarkIcon height="xs" width="xs" />
        </Box>
      ) : null}
      <Box as="span" whiteSpace="nowrap">
        <Text textStyle="body-small">{children}</Text>
      </Box>
    </Flex>
  );
};

Chip.displayName = 'Chip';

export default Chip;
