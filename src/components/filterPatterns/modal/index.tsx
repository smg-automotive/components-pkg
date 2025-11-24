import React, { FC } from 'react';
import {
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import TranslationProvider from 'src/components/translationProvider';

import { FilterHeading } from '../Heading';
import FilterActionButton from '../ActionButton';

import { ModalFilterProps } from './props';
import { OpenFilterButton } from './OpenFilterButton';

const ModalFilterContent: FC<ModalFilterProps> = ({
  language,
  actionButton,
  appliedLabel,
  displayValue,
  initialModalState = 'closed',
  Icon,
  isApplied,
  label,
  numberOfAppliedFilters,
  onModalClose,
  onModalOpen,
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
  const { t } = useI18n();
  const { onOpen, onClose, isOpen } = useDisclosure({
    defaultIsOpen: initialModalState === 'open',
    onOpen: onModalOpen,
    onClose: onModalClose,
  });
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
        resetButtonAriaLabel={t('filterSelectButton.resetButtonAriaLabel', {
          label,
        })}
        onResetFilter={() => onResetFilter('filterButton')}
      />
      <ChakraModal
        key={`modal-filter-${label}-${isOpen ? 'open' : 'closed'}`}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        motionPreset="slideInBottom"
        trapFocus={trapFocus}
      >
        <ModalContent h="full" w="full" paddingY="2xl" paddingX="0">
          <ModalHeader
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
          </ModalHeader>
          <ModalBody
            overflowY="auto"
            marginTop="2xl"
            marginBottom={showCallToActionButton ? '2xl' : '0'}
            paddingY="0"
            paddingX="2xl"
          >
            {children}
          </ModalBody>
          {showCallToActionButton ? (
            <ModalFooter paddingY="0" paddingX="2xl">
              <FilterActionButton
                actionButton={actionButton}
                isApplied={isApplied}
                onClose={onClose}
              />
            </ModalFooter>
          ) : null}
        </ModalContent>
      </ChakraModal>
    </>
  );
};
export const ModalFilter: FC<ModalFilterProps> = ({ language, ...rest }) => {
  return (
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <ModalFilterContent language={language} {...rest} />
    </TranslationProvider>
  );
};

export default ModalFilter;
