import React, { FC } from 'react';
import {
  ButtonGroup,
  chakra,
  Button as ChakraButton,
  IconButton,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';

import { ChevronDownSmallIcon, CloseIcon } from 'src/components/icons';

import { PopoverFilterProps } from './props';
import FilterPopover from './Popover';

export const PopoverFilter: FC<PopoverFilterProps> = ({
  actionButton,
  displayValue,
  initialPopoverState = 'closed',
  isApplied,
  label,
  numberOfAppliedFilters,
  onPopoverClose,
  onPopoverOpen,
  onResetFilter,
  children,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure({
    defaultIsOpen: initialPopoverState === 'open',
    onOpen: onPopoverOpen,
    onClose: onPopoverClose,
  });

  const appliedOrOpenColorScheme = {
    backgroundColor: 'gray.900',
    ...(isApplied
      ? {
          _hover: {
            backgroundColor: 'black',
          },
        }
      : {
          _groupHover: {
            backgroundColor: 'black',
          },
        }),
    color: 'white',
  };

  const defaultColorSchema = {
    backgroundColor: 'gray.100',
    _groupHover: {
      backgroundColor: 'gray.200',
    },
    color: 'gray.900',
  };

  return (
    <Popover
      returnFocusOnClose={true}
      placement="bottom-start"
      isLazy={true}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <ButtonGroup isAttached={true} w="full" maxW="full">
        <PopoverTrigger>
          <ChakraButton
            borderRadius="sm"
            borderRightColor={isApplied ? 'white' : undefined}
            borderRightWidth={isApplied ? '1px' : undefined}
            display="flex"
            flex="1"
            h="md"
            justifyContent="space-between"
            minW="0"
            paddingX="md"
            rightIcon={
              isApplied ? undefined : (
                <ChevronDownSmallIcon
                  w="xs"
                  h="xs"
                  transition="0.2s"
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                />
              )
            }
            {...(isApplied || isOpen
              ? appliedOrOpenColorScheme
              : defaultColorSchema)}
          >
            <chakra.span
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {displayValue && isApplied ? displayValue : label}
            </chakra.span>
          </ChakraButton>
        </PopoverTrigger>
        {isApplied ? (
          <IconButton
            aria-label={'Reset'}
            borderRadius="sm"
            h="md"
            icon={<CloseIcon w="xs" h="xs" />}
            minW="md"
            onClick={onResetFilter}
            w="md"
            {...appliedOrOpenColorScheme}
          />
        ) : null}
      </ButtonGroup>
      <FilterPopover
        actionButton={actionButton}
        isApplied={isApplied}
        label={label}
        numberOfAppliedFilters={numberOfAppliedFilters}
        onClose={onClose}
        onResetFilter={onResetFilter}
      >
        {children}
      </FilterPopover>
    </Popover>
  );
};

export default PopoverFilter;
