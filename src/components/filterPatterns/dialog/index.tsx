import React, { FC } from 'react';
import { I18nContext } from '@smg-automotive/i18n-pkg';
import {
  Dialog as ChakraDialog,
  Portal,
  useDisclosure,
  useSlotRecipe,
} from '@chakra-ui/react';

import { TranslationProvider } from 'src/components/translationProvider';

import { FilterHeading } from '../Heading';
import { FilterActionButton } from '../ActionButton';

import { DialogFilterProps } from './props';
import { OpenFilterButton } from './OpenFilterButton';

export const DialogFilter: FC<DialogFilterProps> = ({
  actionButton,
  appliedLabel,
  displayValue,
  initialDialogState = 'closed',
  Icon,
  isApplied,
  label,
  language,
  numberOfAppliedFilters,
  onDialogClose,
  onDialogOpen,
  onResetFilter,
  showCallToActionButton = true,
  showResetButton = true,
  header,
  isDisabled = false,
  children,
  paddingX,
  backgroundColor,
  color,
  trapFocus = true,
  triggerHeight,
  triggerDisplayType,
}) => {
  const { onOpen, onClose, open } = useDisclosure({
    defaultOpen: initialDialogState === 'open',
    onOpen: onDialogOpen,
    onClose: onDialogClose,
  });

  const recipe = useSlotRecipe({ key: 'dialogFilter' });
  const styles = recipe(recipe);

  return (
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <I18nContext.Consumer>
        {({ t }) => {
          return (
            <>
              <OpenFilterButton
                displayValue={displayValue}
                Icon={Icon}
                isApplied={isApplied}
                label={label}
                onClick={onOpen}
                isDisabled={isDisabled}
                paddingX={paddingX}
                backgroundColor={backgroundColor}
                color={color}
                height={triggerHeight}
                showResetButton={showResetButton}
                displayType={triggerDisplayType}
                appliedLabel={appliedLabel}
                resetButtonAriaLabel={t(
                  'filterSelectButton.resetButtonAriaLabel',
                  { label },
                )}
                onResetFilter={() => onResetFilter('filterButton')}
              />
              <ChakraDialog.Root
                key={`dialog-filter-${label}-${open ? 'open' : 'closed'}`}
                open={open}
                onOpenChange={(e) => (e.open ? onOpen() : onClose())}
                trapFocus={trapFocus}
              >
                <Portal>
                  <ChakraDialog.Positioner>
                    <ChakraDialog.Content
                      h="full"
                      w="full"
                      paddingY="2xl"
                      paddingX="0"
                      borderRadius="none"
                      css={styles.content}
                    >
                      <ChakraDialog.Header
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        paddingY="0"
                        paddingX="2xl"
                      >
                        {header ? (
                          header
                        ) : (
                          <FilterHeading
                            language={language}
                            Icon={Icon}
                            isApplied={isApplied}
                            label={label}
                            numberOfAppliedFilters={numberOfAppliedFilters}
                            onClose={onClose}
                            onResetFilter={() => onResetFilter('filter')}
                          />
                        )}
                      </ChakraDialog.Header>
                      <ChakraDialog.Body
                        overflowY="auto"
                        marginTop="2xl"
                        marginBottom={showCallToActionButton ? '2xl' : '0'}
                        paddingY="0"
                        paddingX="2xl"
                      >
                        {children}
                      </ChakraDialog.Body>
                      {showCallToActionButton ? (
                        <ChakraDialog.Footer paddingY="0" paddingX="2xl">
                          <FilterActionButton
                            actionButton={actionButton}
                            isApplied={isApplied}
                            onClose={onClose}
                          />
                        </ChakraDialog.Footer>
                      ) : null}
                    </ChakraDialog.Content>
                  </ChakraDialog.Positioner>
                </Portal>
              </ChakraDialog.Root>
            </>
          );
        }}
      </I18nContext.Consumer>
    </TranslationProvider>
  );
};
