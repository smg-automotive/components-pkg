import React, { FC } from 'react';
import { createToaster } from '@chakra-ui/react';

import { Toast, toastConfig } from '@/src/hooks/useToast/Toast';

export const topToaster = createToaster({
  placement: 'top',
  ...toastConfig,
});

export const TopToast: FC = () => {
  return <Toast toaster={topToaster} />;
};

export const topRightToaster = createToaster({
  placement: 'top-end',
  ...toastConfig,
});

export const TopRightToast: FC = () => {
  return <Toast toaster={topRightToaster} />;
};
