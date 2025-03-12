import React, { FC } from 'react';
import { Auth0UserType, EnrichedSessionUser } from '@smg-automotive/auth';
import { Box, Divider, GridItem, Stack } from '@chakra-ui/react';

import { GarageIcon } from 'src/components/icons';
import Avatar from 'src/components/avatar';

type Props = {
  user: EnrichedSessionUser | null;
};

const DrawerUserInfo: FC<Props> = ({ user }) => {
  if (!user) return null;

  const selectedTenant = user.managedSellers?.find(
    (seller) => seller.id === Number(user.sellerId),
  );

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
            {user.userType === Auth0UserType.Professional ? (
              <Box as="span">({user.sellerId})</Box>
            ) : null}
          </Stack>
        </Stack>
        {selectedTenant ? (
          <Stack direction="row">
            <GarageIcon />
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
              <Box as="span" fontWeight="bold">
                {selectedTenant.billingName || selectedTenant.id}
              </Box>
              <Box as="span">
                {selectedTenant.billingZipCode} {selectedTenant.billingCity}
              </Box>
            </Stack>
          </Stack>
        ) : null}
      </Stack>
      <Divider />
    </GridItem>
  );
};

export default DrawerUserInfo;
