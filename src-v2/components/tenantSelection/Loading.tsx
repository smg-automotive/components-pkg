import React from 'react';

import Spinner from '../spinner';
import Box from '../box';

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
