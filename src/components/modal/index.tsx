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
  const { t } = useI18n();

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
            <ModalFooter>
              <Button variant="secondary" onClick={onClose}>
                {t('modal.close')}
              </Button>

              <Box display="flex" justifyContent="space-between">
                {secondaryActionButton?.action ? (
                  <Button
                    variant="secondary"
                    onClick={secondaryActionButton.action}
                    mr="12"
                  >
                    {secondaryActionButton.label}
                  </Button>
                ) : null}
                {primaryActionButton?.action ? (
                  <Button
                    variant="primary"
                    onClick={primaryActionButton.action}
                  >
                    {primaryActionButton.label}
                  </Button>
                ) : null}
              </Box>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
