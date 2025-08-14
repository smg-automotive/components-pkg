import React, { FC } from 'react';
import { Auth0UserType, type EnrichedSessionUser } from '@smg-automotive/auth';
import { Box, Divider, GridItem, Stack } from '@chakra-ui/react';

import Show from 'src/components/show';

import Avatar from 'src/components/avatar';

import TenantSelectionMenu from './TenantSelectionMenu';
import SelectedTenantInfo from './SelectedTenantInfo';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
  showTenantSelection: boolean;
};

const DrawerUserInfo: FC<Props> = ({
  user,
  selectTenant,
  showTenantSelection,
}) => {
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
        {selectedTenant && showTenantSelection ? (
          <>
            <Show above="md">
              <SelectedTenantInfo selectedTenant={selectedTenant} />
            </Show>
            <Show below="sm" marginX="-lg" marginBottom="-lg">
              <TenantSelectionMenu
                user={user}
                selectedTenant={selectedTenant}
                selectTenant={selectTenant}
              />
            </Show>
          </>
        ) : null}
      </Stack>
      <Divider
        borderBottomWidth={{
          base: selectedTenant ? 0 : '1px',
          md: '1px',
        }}
      />
    </GridItem>
  );
};

export default DrawerUserInfo;
