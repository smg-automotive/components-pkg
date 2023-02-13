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
    color: 'white',
  };

  const defaultColorSchema = {
    backgroundColor: 'gray.100',
    color: 'gray.900',
  };

  return (
    <TranslationProvider
      language={props.language}
      scopes={['filterSelectButton']}
    >
      <Popover
        placement="bottom-start"
        isLazy={true}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ButtonGroup isAttached={true} maxWidth="250px" w="full">
          <PopoverTrigger>
            <ChakraButton
              w="full"
              h="md"
              display="flex"
              justifyContent="flex-start"
              borderRadius="sm"
              paddingX="md"
              borderRightColor={props.isApplied ? 'white' : undefined}
              borderRightWidth={props.isApplied ? '1px' : undefined}
              {...(props.isApplied || isOpen
                ? appliedOrOpenColorScheme
                : defaultColorSchema)}
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
              h="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="sm"
              {...appliedOrOpenColorScheme}
            />
          ) : (
            <IconButton
              icon={
                <ChevronDownSmallIcon
                  w="xs"
                  h="xs"
                  transition="0.2s"
                  transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                />
              }
              aria-label="open filter"
              onClick={isOpen ? undefined : onOpen}
              minW="md"
              h="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="sm"
              {...(isOpen ? appliedOrOpenColorScheme : defaultColorSchema)}
            />
          )}
        </ButtonGroup>
        <FilterPopover {...props} onClose={onClose}>
          {props.children}
        </FilterPopover>
      </Popover>
    </TranslationProvider>
  );
};

export default FilterSelectButton;
