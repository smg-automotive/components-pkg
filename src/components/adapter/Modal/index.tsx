import React, { FC, PropsWithChildren } from 'react';

import { Dialog, DialogProps } from 'src/components/dialog';

type Props = Omit<DialogProps, 'open'> & {
  isOpen?: boolean;
  onClose?: () => void;
};

export const Modal: FC<PropsWithChildren<Props>> = (props) => {
  const { isOpen, onClose, children, ...rest } = props;
  const onCloseHandler = onClose ? onClose : () => {};

  return (
    <Dialog
      {...rest}
      open={isOpen}
      onOpenChange={(e) => (!e.open ? onCloseHandler() : () => {})}
    >
      {children}
    </Dialog>
  );
};
