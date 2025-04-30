import React, { FC } from 'react';
import type { ManagedSeller } from '@smg-automotive/auth';

import Stack from 'src/components/stack';
import { GarageIcon } from 'src/components/icons';
import Box from 'src/components/box';

type Props = {
  selectedTenant: ManagedSeller;
};

const SelectedTenantInfo: FC<Props> = ({ selectedTenant }) => (
  <Stack direction="row">
    <GarageIcon />
    <Stack
      direction={{
        base: 'column',
        sm: 'row',
      }}
      spacing={{
        base: 0,
        sm: 'sm',
      }}
    >
      <Box as="span" textStyle="body" fontWeight="bold">
        {selectedTenant.billingName || selectedTenant.id}
      </Box>
      <Box as="span" textStyle="body">
        {selectedTenant.billingZipCode} {selectedTenant.billingCity}
      </Box>
    </Stack>
  </Stack>
);

export default SelectedTenantInfo;
