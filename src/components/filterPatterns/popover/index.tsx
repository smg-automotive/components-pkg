'use client';

import React, { FC } from 'react';
import { I18nContext } from '@smg-automotive/i18n-pkg';
import {
  ButtonGroup,
  chakra,
  Popover as ChakraPopover,
  IconButton,
  useDisclosure,
  useSlotRecipe,
} from '@chakra-ui/react';

import { TranslationProvider } from 'src/components/translationProvider';
import { ChevronDownSmallIcon, CloseIcon } from 'src/components/icons';

import { PopoverFilterProps } from './props';
import { Popover as FilterPopover } from './Popover';

export const PopoverFilter: FC<PopoverFilterProps> = ({
  actionButton,
  displayValue,
  enforceHeight,
  Icon,
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
  triggerHeight = 'md',
  isDisabled,
  hasFlip = true,
  zIndex = 'popover',
}) => {
  const { onOpen, onClose, open } = useDisclosure({
    defaultOpen: initialPopoverState === 'open',
    onOpen: onPopoverOpen,
    onClose: onPopoverClose,
  });

  const recipe = useSlotRecipe({ key: 'popoverFilter' });
  const styles = recipe();

  return (
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <I18nContext.Consumer>
        {({ t }) => (
          <ChakraPopover.Root
            positioning={{ placement: 'bottom-start', flip: hasFlip }}
            lazyMount={true}
            open={open}
            onOpenChange={(e) => (e.open ? onOpen() : onClose())}
          >
            <ButtonGroup
              attached={true}
              display="inline-flex"
              width="full"
              maxW="full"
            >
              <ChakraPopover.Trigger
                disabled={isDisabled}
                css={styles.trigger}
                height={triggerHeight}
                borderRightColor={displayValue ? 'white' : undefined}
                backgroundColor={isApplied || open ? 'gray.900' : 'gray.100'}
                color={isApplied || open ? 'white' : 'gray.900'}
                _hover={{
                  backgroundColor: isApplied || open ? 'black' : 'gray.200',
                }}
              >
                <chakra.span
                  display="flex"
                  alignItems="center"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {Icon ? <Icon h="xs" w="xs" mr="xs" /> : null}
                  <chakra.span overflow="hidden" textOverflow="ellipsis">
                    {[
                      displayValue ? (appliedLabel ?? label) : label,
                      displayValue,
                    ]
                      .filter(Boolean)
                      .join(': ')}
                  </chakra.span>
                </chakra.span>
                {displayValue ? null : (
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    <ChevronDownSmallIcon
                      width="xs"
                      height="xs"
                      transition="transform"
                      transform={open ? 'rotate(180deg)' : 'rotate(0deg)'}
                    />
                  </chakra.span>
                )}
              </ChakraPopover.Trigger>
              {displayValue ? (
                <IconButton
                  aria-label={t('filterSelectButton.reset')}
                  disabled={open}
                  css={styles.close}
                  height={triggerHeight}
                  onClick={() => onResetFilter('filterButton')}
                >
                  <CloseIcon width="xs" height="xs" />
                </IconButton>
              ) : null}
            </ButtonGroup>
            <FilterPopover
              actionButton={actionButton}
              Icon={Icon}
              isApplied={isApplied}
              label={label}
              numberOfAppliedFilters={numberOfAppliedFilters}
              onClose={onClose}
              onResetFilter={() => onResetFilter('filter')}
              showCallToActionButton={showCallToActionButton}
              header={header}
              enforceHeight={enforceHeight}
              zIndex={zIndex}
            >
              {children}
            </FilterPopover>
          </ChakraPopover.Root>
        )}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};
