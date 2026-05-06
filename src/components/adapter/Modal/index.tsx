import React, { FC, PropsWithChildren } from 'react';
import { Dialog as ChakraDialog } from '@chakra-ui/react';

import { DialogCloseButton } from '@/src/components/dialog/DialogCloseButton';
import { Dialog, DialogProps } from '@/src/components/dialog';

type ModalCloseButtonProps = React.ComponentProps<typeof DialogCloseButton>;

export const ModalCloseButton: FC<ModalCloseButtonProps> = (props) => {
  return (
    <ChakraDialog.CloseTrigger asChild>
      <DialogCloseButton {...props} />
    </ChakraDialog.CloseTrigger>
  );
};

type Props = Omit<DialogProps, 'open'> & {
  isOpen?: boolean;
  onClose?: () => void;
};

export const Modal: FC<PropsWithChildren<Props>> = (props) => {
  const { isOpen, onClose, children, ...rest } = props;

  return (
    <Dialog
      {...rest}
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) onClose?.();
      }}
    >
      {children}
    </Dialog>
  );
};
