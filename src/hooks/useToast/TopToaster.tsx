import React, { FC } from 'react';
import { createToaster } from '@chakra-ui/react';

import { Toast, toastConfig } from './Toast';

export const topToaster = createToaster({
  placement: 'top',
  ...toastConfig,
});

export const TopToast: FC = () => {
  return <Toast toaster={topToaster} />;
};
