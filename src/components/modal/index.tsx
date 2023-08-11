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

import { H3 } from '../heading';
import Divider from '../divider';
import Button from '../button';

type ActionButton = {
  action: () => void;
  label: string;
};

interface Props
  extends Pick<ModalProps, 'isOpen' | 'onClose' | 'motionPreset'> {
  title?: string;
  primaryActionButton?: ActionButton;
  secondaryActionButton?: ActionButton;
  variant?: 'fullScreen' | 'base' | 'topScroll';
  size?: 'md' | 'lg' | 'full';
}

const Modal: FC<PropsWithChildren<Props>> = ({
  title,
  primaryActionButton,
  secondaryActionButton,
  children,
  size,
  motionPreset = 'scale',
  variant = 'base',
  ...modalProps
}) => {
  const modalSize =
    size ??
    (variant !== 'fullScreen' ? { xs: 'full', sm: size ?? 'md' } : 'full');

  return (
    <ChakraModal
      isCentered
      motionPreset={motionPreset}
      variant={variant}
      size={modalSize}
      {...modalProps}
    >
      <ModalOverlay />
      <ModalContent>
        {title && (
          <>
            <ModalHeader>
              <H3>{title}</H3>
              <ModalCloseButton fontSize="base" />
            </ModalHeader>
            <Divider />
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
