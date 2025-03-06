import React, { FC } from 'react';
import { ManagedSeller, MergedUser } from '@smg-automotive/auth';
import { Box, Divider, GridItem, Stack } from '@chakra-ui/react';

import { GarageIcon } from 'src/components/icons';
import Avatar from 'src/components/avatar';

type Props = {
  user: MergedUser | null;
  selectedTenant: ManagedSeller | null;
};

const DrawerUserInfo: FC<Props> = ({ user, selectedTenant }) => {
  if (!user) return null;

  return (
    <GridItem colSpan={{ base: 1, md: 5 }}>
      <Stack
        px="lg"
        mb="lg"
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing={{ base: 'sm', md: '2xl' }}
      >
        <Stack direction="row">
          <Avatar />
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: 0,
              md: 'sm',
            }}
          >
            <Box
              as="span"
              fontWeight="bold"
              maxW="calc(100vw - 2 * var(--chakra-space-lg) - var(--chakra-space-sm) - var(--chakra-sizes-sm))"
            >
              {user.email}
            </Box>
            {user.userName && user.email !== user.userName ? (
              <Box as="span">({user.userName})</Box>
            ) : null}
          </Stack>
        </Stack>
        {selectedTenant ? (
          <Stack direction="row">
            <GarageIcon />
            <Box as="span">
              {selectedTenant.billingName || selectedTenant.id}
              {selectedTenant.billingCity ? ', ' : null}
              {selectedTenant.billingCity}
            </Box>
          </Stack>
        ) : null}
      </Stack>
      <Divider />
    </GridItem>
  );
};

export default DrawerUserInfo;
