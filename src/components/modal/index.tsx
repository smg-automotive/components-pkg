import React, { FC, PropsWithChildren } from 'react';
import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalOverlayProps,
  ModalProps,
} from '@chakra-ui/react';

import Divider from '../divider';
import Button from '../button';

type ActionButton = {
  action: () => void;
  label: string;
};

interface Props extends ModalProps {
  title?: string;
  modalOverlayProps?: ModalOverlayProps;
  primaryActionButton?: ActionButton;
  secondaryActionButton?: ActionButton;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  title,
  primaryActionButton,
  secondaryActionButton,
  onClose,
  children,
  modalOverlayProps,
  ...modalProps
}) => {
  return (
    <ChakraModal {...modalProps} onClose={onClose}>
      <ModalOverlay {...modalOverlayProps} />
      <ModalContent>
        {title && (
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
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
