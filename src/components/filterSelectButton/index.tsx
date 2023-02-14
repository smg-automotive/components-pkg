import React, { FC, PropsWithChildren } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import {
  ButtonGroup,
  chakra,
  Button as ChakraButton,
  IconButton,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';

import TranslationProvider from '../translationProvider';
import { ChevronDownSmallIcon, CloseIcon } from '../icons';

import FilterPopover, { PopoverProps } from './Popover';

// TODO: cleanup props with subcomponents
type Props = {
  language: Language;
  displayValue: string; // used for the value if a filter is applied in the dark gray box
  initialPopoverState?: 'open' | 'closed';
  onPopoverClose?: () => void; // when dialog is closed - for tracking?
  onPopoverOpen?: () => void; // when dialog gets open - for tracking?
} & Omit<PopoverProps, 'onClose'>;

const FilterSelectButton: FC<PropsWithChildren<Props>> = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure({
    defaultIsOpen: props.initialPopoverState === 'open',
    onOpen: props.onPopoverOpen,
    onClose: props.onPopoverClose,
  });

  const appliedOrOpenColorScheme = {
    backgroundColor: 'gray.900',
    ...(props.isApplied
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
    <TranslationProvider
      language={props.language}
      scopes={['filterSelectButton']}
    >
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
              h="md"
              display="flex"
              justifyContent="space-between"
              flex="1"
              minW={0}
              borderRadius="sm"
              paddingX="md"
              borderRightColor={props.isApplied ? 'white' : undefined}
              borderRightWidth={props.isApplied ? '1px' : undefined}
              {...(props.isApplied || isOpen
                ? appliedOrOpenColorScheme
                : defaultColorSchema)}
              rightIcon={
                props.isApplied ? undefined : (
                  <ChevronDownSmallIcon
                    w="xs"
                    h="xs"
                    transition="0.2s"
                    transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                  />
                )
              }
            >
              <chakra.span
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {props.displayValue || props.label}
              </chakra.span>
            </ChakraButton>
          </PopoverTrigger>
          {props.isApplied ? (
            <IconButton
              icon={<CloseIcon w="xs" h="xs" />}
              aria-label="reset filter"
              onClick={props.onResetFilter}
              minW="md"
              w="md"
              h="md"
              borderRadius="sm"
              {...appliedOrOpenColorScheme}
            />
          ) : null}
        </ButtonGroup>
        <FilterPopover {...props} onClose={onClose}>
          {props.children}
        </FilterPopover>
      </Popover>
    </TranslationProvider>
  );
};

export default FilterSelectButton;
