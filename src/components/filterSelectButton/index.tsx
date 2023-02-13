import React from 'react';
import { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonGroup,
  chakra,
  IconButton,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownSmallIcon, CloseIcon } from '../icons';

import TranslationProvider from '../translationProvider';
import { Language } from '@smg-automotive/i18n-pkg';
import FilterPopover, { PopoverProps } from './Popover';

type Props = {
  language: Language;
  displayValue: string; // used for the value if a filter is applied in the dark gray box
  initialPopoverState?: 'open' | 'closed';
  onPopoverClose?: () => void; // when dialog is closed - for tracking?
  onPopoverOpen?: () => void; // when dialog gets open - for tracking?
} & Omit<PopoverProps, 'onClose'>;

const FilterSelectButton: FC<Props> = (props) => {
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure({
    defaultIsOpen: props.initialPopoverState === 'open',
    onOpen: props.onPopoverOpen,
    onClose: props.onPopoverClose,
  });

  const appliedColorScheme = {
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
              display="flex"
              justifyContent="flex-start"
              borderRadius="sm"
              paddingY="xs"
              paddingX="md"
              borderRightColor={props.isApplied ? 'white' : undefined}
              borderRightWidth={props.isApplied ? '1px' : undefined}
              {...(props.isApplied ? appliedColorScheme : defaultColorSchema)}
            >
              <chakra.span>{props.label}</chakra.span>
              <chakra.span
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {props.displayValue ? `: ${props.displayValue}` : null}
              </chakra.span>
            </ChakraButton>
          </PopoverTrigger>
          {props.isApplied ? (
            <IconButton
              icon={<CloseIcon w="16px" h="16px" />}
              aria-label="reset filter"
              onClick={props.onResetFilter}
              minW="36px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="sm"
              {...appliedColorScheme}
            />
          ) : (
            <IconButton
              icon={<ChevronDownSmallIcon w="16px" h="16px" />}
              aria-label="open filter"
              onClick={onToggle}
              minW="36px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="sm"
              {...defaultColorSchema}
            />
          )}
        </ButtonGroup>
        <FilterPopover {...props} onClose={onClose} />
      </Popover>
    </TranslationProvider>
  );
};

export default FilterSelectButton;
