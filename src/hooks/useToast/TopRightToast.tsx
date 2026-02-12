import React, { FC } from 'react';
import { createToaster } from '@chakra-ui/react';

import { Toast, toastConfig } from './Toast';

export const topRightToaster = createToaster({
  placement: 'top-end',
  ...toastConfig,
});

export const TopRightToast: FC = () => {
  return <Toast toaster={topRightToaster} />;
};
