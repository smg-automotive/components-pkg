import React, { FC } from 'react';
import {
  Box,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';

import TranslationProvider from 'src/components/translationProvider';

import { FilterHeading } from '../Heading';
import FilterActionButton from '../ActionButton';

import { ModalFilterProps } from './props';
import { OpenFilterButton } from './OpenFilterButton';

export const ModalFilter: FC<ModalFilterProps> = ({
  actionButton,
  displayValue,
  initialModalState = 'closed',
  isApplied,
  label,
  language,
  numberOfAppliedFilters,
  onModalClose,
  onModalOpen,
  onResetFilter,
  showCallToActionButton = true,
  header,
  isDisabled = false,
  children,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure({
    defaultIsOpen: initialModalState === 'open',
    onOpen: onModalOpen,
    onClose: onModalClose,
  });

  return (
    <TranslationProvider language={language} scopes={['filterSelectButton']}>
      <>
        <OpenFilterButton
          displayValue={displayValue}
          isApplied={isApplied}
          label={label}
          onClick={onOpen}
          isDisabled={isDisabled}
        />
        <ChakraModal
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          motionPreset="slideInBottom"
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
                  isApplied={isApplied}
                  label={label}
                  numberOfAppliedFilters={numberOfAppliedFilters}
                  onClose={onClose}
                  onResetFilter={onResetFilter}
                />
              )}
            </ModalHeader>
            <ModalBody
              position="relative"
              marginTop="2xl"
              marginBottom={showCallToActionButton ? '2xl' : '0'}
              paddingY="0"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                width: '100%',
                height: { base: '10px', sm: '14px' },
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%)',
              }}
            >
              <Box
                overflowY="auto"
                paddingX="2xl"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="-12px"
              >
                {children}
              </Box>
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
    </TranslationProvider>
  );
};

export default ModalFilter;
