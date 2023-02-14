import React, { FC } from 'react';
import { I18nContext } from '@smg-automotive/i18n-pkg';
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

import { FilterSelectButtonProps } from './props';
import FilterPopover from './Popover';

export const FilterSelectButton: FC<FilterSelectButtonProps> = ({
  actionButton,
  displayValue,
  initialPopoverState = 'closed',
  isApplied,
  label,
  language,
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
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <I18nContext.Consumer>
        {({ t }) => (
          <Popover
            returnFocusOnClose={true}
            placement="bottom-start"
            isLazy={true}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          >
            <ButtonGroup
              isAttached={true}
              w="full"
              maxW="full"
              position="relative"
            >
              <PopoverTrigger>
                <ChakraButton
                  h="md"
                  display="flex"
                  justifyContent="space-between"
                  flex="1"
                  minW={0}
                  borderRadius="sm"
                  paddingX="md"
                  borderRightColor={isApplied ? 'white' : undefined}
                  borderRightWidth={isApplied ? '1px' : undefined}
                  {...(isApplied || isOpen
                    ? appliedOrOpenColorScheme
                    : defaultColorSchema)}
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
                >
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {displayValue || label}
                  </chakra.span>
                </ChakraButton>
              </PopoverTrigger>
              {isApplied ? (
                <IconButton
                  icon={<CloseIcon w="xs" h="xs" />}
                  aria-label={t('filterSelectButton.reset')}
                  onClick={onResetFilter}
                  minW="md"
                  w="md"
                  h="md"
                  borderRadius="sm"
                  {...appliedOrOpenColorScheme}
                />
              ) : null}
            </ButtonGroup>
            <FilterPopover
              actionButton={actionButton}
              numberOfAppliedFilters={numberOfAppliedFilters}
              isApplied={isApplied}
              label={label}
              onResetFilter={onResetFilter}
              onClose={onClose}
            >
              {children}
            </FilterPopover>
          </Popover>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default FilterSelectButton;
