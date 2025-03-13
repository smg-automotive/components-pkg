import React, { FC } from 'react';
import { Auth0UserType, EnrichedSessionUser } from '@smg-automotive/auth';
import { Box, Divider, GridItem, Stack } from '@chakra-ui/react';

import Show from 'src/components/show';

import Avatar from 'src/components/avatar';

import TenantSelectionMenu from './TenantSelectionMenu';
import SelectedTenantInfo from './SelectedTenantInfo';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

const DrawerUserInfo: FC<Props> = ({ user, selectTenant }) => {
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
          sm: 'row',
        }}
        spacing={{ base: 'sm', sm: '2xl' }}
      >
        <Stack direction="row">
          <Avatar />
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
            <Box as="span" fontWeight="bold">
              {user.email}
            </Box>
            {user.userType === Auth0UserType.Professional ? (
              <Box as="span">({user.sellerId})</Box>
            ) : null}
          </Stack>
        </Stack>
        {selectedTenant ? (
          <>
            <Show above="sm">
              <SelectedTenantInfo selectedTenant={selectedTenant} />
            </Show>
            <Show below="xs" marginX="-lg" marginBottom="-lg">
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
          sm: '1px',
        }}
      />
    </GridItem>
  );
};

export default DrawerUserInfo;
