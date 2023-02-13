import React from 'react';
import { FC } from 'react';
import {
  Box,
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
  initialState?: 'open' | 'closed';
  onPopoverClose?: () => void; // when dialog is closed - for tracking?
  onPopoverOpen?: () => void; // when dialog gets open - for tracking?
} & Omit<PopoverProps, 'onClose'>;

const FilterSelectButton: FC<Props> = (props) => {
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
    onOpen: props.onPopoverOpen,
    onClose: props.onPopoverClose,
  });
  /*
   * design:
   * mobile: https://www.figma.com/file/WvYYKrx8rxw80fwkzhAQwh/Search-Results-%26-Advanced-Search?node-id=871%3A179771&t=ZhQtXXEVuEgwU5Sn-0
   * desktop: https://www.figma.com/file/WvYYKrx8rxw80fwkzhAQwh/Search-Results-%26-Advanced-Search?node-id=101%3A62741&t=vmcTmi1JMle1Lj6Q-0
   * */

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
              onClick={onToggle}
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
              <chakra.span>
                {props.displayValue ? `: ${props.displayValue}` : null}
              </chakra.span>
            </ChakraButton>
          </PopoverTrigger>
          {props.isApplied ? (
            <IconButton
              icon={<CloseIcon w="16px" h="16px" />}
              aria-label="reset filter"
              onClick={props.onResetFilter}
              w="36px"
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
              w="36px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="sm"
              {...defaultColorSchema}
            />
          )}
        </ButtonGroup>
        <FilterPopover {...props} onClose={onClose} />
        {/* for the dialog - use chakra popover https://chakra-ui.com/docs/components/popover/props */}
      </Popover>
    </TranslationProvider>
  );
};

export default FilterSelectButton;
