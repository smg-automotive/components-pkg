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

import TranslationProvider from '../translationProvider';
import FilterHeading from '../popoverFilter/Heading';
import FilterActionButton from '../popoverFilter/ActionButton';
import { ChevronRightSmallIcon } from '../icons';

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
          paddingX="lg"
          paddingY="md"
          color="gray.900"
        >
          <chakra.span
            display="flex"
            justifyContent="space-between"
            w="full"
            minW="0"
          >
            <chakra.span mr="2xl">{label}</chakra.span>
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
          <ModalContent w="full">
            <ModalHeader
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              w="full"
              padding="2xl"
            >
              <FilterHeading
                isApplied={isApplied}
                label={label}
                numberOfAppliedFilters={numberOfAppliedFilters}
                onClose={onClose}
                onResetFilter={onResetFilter}
              />
            </ModalHeader>
            <ModalBody overflowY="scroll">{children}</ModalBody>
            <ModalFooter padding="2xl">
              <FilterActionButton
                actionButton={actionButton}
                isApplied={isApplied}
                onClose={onClose}
              />
            </ModalFooter>
          </ModalContent>
        </ChakraModal>
      </>
    </TranslationProvider>
  );
};

export default ModalFilter;
