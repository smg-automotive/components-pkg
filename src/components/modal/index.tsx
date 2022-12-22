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

interface Props extends Pick<ModalProps, 'isOpen' | 'onClose'> {
  title?: string;
  primaryActionButton?: ActionButton;
  secondaryActionButton?: ActionButton;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  title,
  primaryActionButton,
  secondaryActionButton,
  children,
  ...modalProps
}) => {
  return (
    <ChakraModal
      isCentered
      motionPreset="scale"
      size={{ xs: 'full', sm: 'md' }}
      {...modalProps}
    >
      <ModalOverlay />
      <ModalContent>
        {title && (
          <>
            <ModalHeader>
              <H3>{title}</H3>
              <ModalCloseButton />
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
