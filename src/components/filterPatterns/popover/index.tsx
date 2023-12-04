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

import TranslationProvider from 'src/components/translationProvider';
import { ChevronDownSmallIcon, CloseIcon } from 'src/components/icons';

import { PopoverFilterProps } from './props';
import FilterPopover from './Popover';

export const PopoverFilter: FC<PopoverFilterProps> = ({
  actionButton,
  displayValue,
  initialPopoverState = 'closed',
  isApplied,
  label,
  appliedLabel,
  language,
  numberOfAppliedFilters,
  onPopoverClose,
  onPopoverOpen,
  onResetFilter,
  showCallToActionButton = true,
  header,
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
                    {[
                      isApplied ? appliedLabel ?? label : label,
                      displayValue && isApplied ? displayValue : null,
                    ]
                      .filter(Boolean)
                      .join(': ')}
                  </chakra.span>
                </ChakraButton>
              </PopoverTrigger>
              {isApplied ? (
                <IconButton
                  aria-label={t('filterSelectButton.reset')}
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
              showCallToActionButton={showCallToActionButton}
              header={header}
            >
              {children}
            </FilterPopover>
          </Popover>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};

export default PopoverFilter;
