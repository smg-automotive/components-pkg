import React, { FC, PropsWithChildren } from 'react';
import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

import { H3, H4 } from '../heading';
import Divider from '../divider';
import Button from '../button';

type ActionButton = {
  action: () => void;
  label: string;
};

interface Props
  extends Pick<ModalProps, 'isOpen' | 'onClose' | 'motionPreset'> {
  title?: string;
  subtitle?: string;
  primaryActionButton?: ActionButton;
  secondaryActionButton?: ActionButton;
  variant?: 'fullScreenGallery' | 'base';
}

const Modal: FC<PropsWithChildren<Props>> = ({
  title,
  primaryActionButton,
  secondaryActionButton,
  children,
  motionPreset = 'scale',
  variant = 'base',
  subtitle,
  ...modalProps
}) => {
  return (
    <ChakraModal
      isCentered
      motionPreset={motionPreset}
      variant={variant}
      size={variant === 'base' ? { xs: 'full', sm: 'md' } : 'full'}
      {...modalProps}
    >
      <ModalOverlay />
      <ModalContent>
        {title && variant === 'base' && (
          <>
            <ModalHeader>
              <H3>{title}</H3>
              <ModalCloseButton />
            </ModalHeader>
            <Divider />
          </>
        )}

        {title && subtitle && variant === 'fullScreenGallery' && (
          <>
            <ModalHeader>
              <H3>{title}</H3>
              <H4>{subtitle}</H4>
              <ModalCloseButton />
            </ModalHeader>
          </>
        )}

        <ModalBody>{children}</ModalBody>

        {(primaryActionButton || secondaryActionButton) && (
          <>
            <Divider />
            <ModalFooter
              display="flex"
              justifyContent={
                secondaryActionButton && primaryActionButton
                  ? 'space-between'
                  : 'flex-end'
              }
            >
              {secondaryActionButton ? (
                <Button
                  variant="secondary"
                  onClick={secondaryActionButton.action}
                >
                  {secondaryActionButton.label}
                </Button>
              ) : null}
              {primaryActionButton ? (
                <Button variant="primary" onClick={primaryActionButton.action}>
                  {primaryActionButton.label}
                </Button>
              ) : null}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
