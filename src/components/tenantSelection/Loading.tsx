import React from 'react';

import Spinner from '@/src/components/spinner';
import Box from '@/src/components/box';

import { TenantSelectionModalLayout } from './ModalLayout';

export const TenantSelectionLoadingState = () => {
  return (
    <TenantSelectionModalLayout>
      <Box margin="auto">
        <Spinner />
      </Box>
    </TenantSelectionModalLayout>
  );
};
