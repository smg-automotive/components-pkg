import React, { FC } from 'react';
import { Auth0UserType, type EnrichedSessionUser } from '@smg-automotive/auth';
import { GridItem, Separator } from '@chakra-ui/react';

import { Stack } from 'src/components/stack';
import { Box } from 'src/components/box';
import { Avatar } from 'src/components/avatar';

import { TenantSelectionMenu } from './TenantSelectionMenu';
import { SelectedTenantInfo } from './SelectedTenantInfo';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
  showTenantSelection: boolean;
};

export const DrawerUserInfo: FC<Props> = ({
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
        paddingX="lg"
        marginBottom="lg"
        direction={{
          base: 'column',
          md: 'row',
        }}
        gap={{ base: 'sm', md: '2xl' }}
      >
        <Stack direction="row">
          <Avatar />
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            gap={{
              base: '0',
              md: 'sm',
            }}
          >
            <Box
              as="span"
              fontWeight="bold"
              css={{
                maxWidth:
                  'calc(100vw - 2 * var(--chakra-space-lg) - var(--chakra-space-sm) - var(--chakra-sizes-sm))',
              }}
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
            <Box hideBelow="md">
              <SelectedTenantInfo selectedTenant={selectedTenant} />
            </Box>
            <Box hideFrom="sm" marginX="-lg" marginBottom="-lg">
              <TenantSelectionMenu
                user={user}
                selectedTenant={selectedTenant}
                selectTenant={selectTenant}
              />
            </Box>
          </>
        ) : null}
      </Stack>
      <Separator
        css={{
          borderBottomWidth: selectedTenant
            ? { base: 0, md: '1px' }
            : { base: '1px', md: '1px' },
        }}
      />
    </GridItem>
  );
};
