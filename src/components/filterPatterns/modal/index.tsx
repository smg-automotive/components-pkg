import React, { FC } from 'react';
import {
  chakra,
  Button as ChakraButton,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';

import TranslationProvider from 'src/components/translationProvider';

import { ChevronRightSmallIcon } from 'src/components/icons';

import { FilterHeading } from '../Heading';
import FilterActionButton from '../ActionButton';

import { ModalFilterProps } from './props';

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
        <ChakraButton
          onClick={onOpen}
          rightIcon={<ChevronRightSmallIcon color="gray.900" />}
          display="flex"
          justifyContent="space-between"
          w="full"
          h="lg"
          paddingX="0"
          paddingY="md"
          color="gray.900"
        >
          <chakra.span
            display="flex"
            justifyContent="space-between"
            w="full"
            minW="0"
          >
            <chakra.span mr="2xl" whiteSpace="nowrap">
              {label}
            </chakra.span>
            <chakra.span
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {displayValue && isApplied ? displayValue : null}
            </chakra.span>
          </chakra.span>
        </ChakraButton>
        <ChakraModal
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          motionPreset="slideInBottom"
        >
          <ModalContent h="full" w="full">
            <ModalHeader
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              paddingTop="2xl"
              paddingBottom="0"
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
            <ModalBody overflowY="scroll" paddingY="0" marginY="2xl">
              {children}
            </ModalBody>
            {showCallToActionButton ? (
              <ModalFooter paddingBottom="2xl">
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
