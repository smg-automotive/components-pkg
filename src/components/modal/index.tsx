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
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { H3 } from '../heading';
import Divider from '../divider';
import Button from '../button';

type ActionButton = {
  action: () => void;
  label: string;
};

export interface Props
  extends Pick<ModalProps, 'isOpen' | 'onClose' | 'motionPreset'> {
  title?: string;
  primaryActionButton?: ActionButton;
  secondaryActionButton?: ActionButton;
  variant?: 'fullScreen' | 'base' | 'topScroll';
  size?: 'md' | 'lg' | 'full' | 'auth0';
  disableBodyPadding?: boolean;
  overlayColor?: 'default' | 'gray';
}

const Modal: FC<PropsWithChildren<Props>> = ({
  title,
  primaryActionButton,
  secondaryActionButton,
  children,
  size,
  motionPreset = 'scale',
  variant = 'base',
  disableBodyPadding = false,
  overlayColor = 'default',
  ...modalProps
}) => {
  const modalSize =
    size || variant !== 'fullScreen' ? { xs: 'full', sm: size } : 'full';
  const bothActionButtons = primaryActionButton && secondaryActionButton;
  const bodyPadding = disableBodyPadding ? { p: 0 } : {};
  const { overlay } = useMultiStyleConfig('Modal');
  if (overlayColor === 'gray') {
    overlay.bg = 'gray.100';
    overlay.opacity = '1 !important';
  }

  return (
    <ChakraModal
      isCentered
      motionPreset={motionPreset}
      variant={variant}
      size={modalSize}
      {...modalProps}
    >
      <ModalOverlay sx={overlay} />
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

        <ModalBody {...bodyPadding}>{children}</ModalBody>

        {(primaryActionButton || secondaryActionButton) && (
          <>
            <Divider />
            <ModalFooter
              display="flex"
              justifyContent={
                bothActionButtons ? 'space-between' : 'flex-start'
              }
              gap={bothActionButtons ? 'sm' : 0}
            >
              {secondaryActionButton ? (
                <Button
                  variant="secondary"
                  onClick={secondaryActionButton.action}
                  width={{ base: 'full', sm: 'fit-content' }}
                >
                  {secondaryActionButton.label}
                </Button>
              ) : null}
              {primaryActionButton ? (
                <Button
                  variant="primary"
                  onClick={primaryActionButton.action}
                  width={{ base: 'full', sm: 'fit-content' }}
                >
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
