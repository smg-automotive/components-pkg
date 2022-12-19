import React, { FC, PropsWithChildren } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import {
  Box,
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
  actionName: string;
};

interface Props extends ModalProps {
  title: string;
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
  const { t } = useI18n();

  return (
    <ChakraModal {...modalProps} onClose={onClose}>
      <ModalOverlay {...modalOverlayProps} />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <Divider />

        <ModalBody>{children}</ModalBody>

        {(primaryActionButton?.action || secondaryActionButton?.action) && (
          <>
            <Divider />
            <ModalFooter>
              <Button variant="secondary" onClick={onClose}>
                {t('modal.close')}
              </Button>

              {primaryActionButton?.action &&
                !secondaryActionButton?.action && (
                  <Button
                    variant="primary"
                    onClick={primaryActionButton.action}
                  >
                    {primaryActionButton.actionName}
                  </Button>
                )}
              {secondaryActionButton?.action &&
                !primaryActionButton?.action && (
                  <Button
                    variant="secondary"
                    onClick={secondaryActionButton.action}
                  >
                    {secondaryActionButton.actionName}
                  </Button>
                )}

              {primaryActionButton?.action && secondaryActionButton?.action && (
                <Box display="flex" justifyContent="space-between">
                  <Button
                    variant="secondary"
                    onClick={secondaryActionButton.action}
                    mr="12"
                  >
                    {secondaryActionButton.actionName}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={primaryActionButton.action}
                  >
                    {primaryActionButton.actionName}
                  </Button>
                </Box>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
