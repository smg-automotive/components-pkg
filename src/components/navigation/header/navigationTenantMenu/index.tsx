import React, { FC, useMemo } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { Button, Popover, Portal, useDisclosure } from '@chakra-ui/react';

import { Text } from 'src/components/text';
import { ChevronDownSmallIcon, GarageIcon } from 'src/components/icons';
import { Box } from 'src/components/box';

import { NavigationTenantMenuContent } from './Content';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

export const NavigationTenantMenu: FC<Props> = ({ user, selectTenant }) => {
  const { onClose, open, onToggle } = useDisclosure();
  const { t } = useI18n();
  const selectedTenant = useMemo(() => {
    return user?.managedSellers?.find(
      (seller) => seller.id === Number(user.sellerId),
    );
  }, [user?.managedSellers, user?.sellerId]);

  if (!user || !user.isMultiTenantUser || !selectedTenant) return null;

  const selectedTenantInfo =
    `${selectedTenant.billingName || ''} ${selectedTenant.billingCity || ''}`.trim() ||
    selectedTenant.id.toString();

  return (
    <Box hideBelow="sm">
      <Popover.Root
        positioning={{ placement: 'bottom-end' }}
        onOpenChange={(e) => {
          if (!e.open) onClose();
        }}
        open={open}
        lazyMount={true}
        unmountOnExit={true}
      >
        <Popover.Trigger asChild>
          <Button
            p="0"
            color={open ? 'blue.700' : 'gray.900'}
            _hover={{ color: 'blue.700' }}
            onClick={onToggle}
            css={{ background: 'transparent' }}
          >
            <GarageIcon />
            <Box hideBelow="md">
              <Text
                as="span"
                fontWeight="bold"
                truncate={true}
                maxW={{ base: 'xl', md: '2xl' }}
                textAlign="left"
                title={selectedTenantInfo}
              >
                {selectedTenantInfo}
              </Text>
            </Box>
            <ChevronDownSmallIcon
              transition="transform"
              transitionDuration="fast"
              transform={open ? 'rotate(180deg)' : 'rotate(0deg)'}
            />
          </Button>
        </Popover.Trigger>
        <Portal>
          <Box zIndex="popover" w="full" h="full" position="relative">
            <Popover.Positioner>
              <Popover.Content
                bg="white"
                boxShadow="sm"
                color="gray.900"
                width={{
                  base: 'full',
                  md: '6xl',
                }}
                css={{
                  maxHeight: 'auth0-height',
                  borderWidth: '1px',
                  marginTop: '10px',
                }}
                p="2xl"
                borderRadius="sm"
                borderColor="gray.200"
                alignItems="center"
                flexDirection="column"
                gap="2xl"
                overflow="auto"
              >
                <NavigationTenantMenuContent
                  user={user}
                  selectTenant={selectTenant}
                  onClose={onClose}
                  selectedTenantId={selectedTenant.id}
                  title={t('auth.tenantSelection.selectionTitle')}
                />
              </Popover.Content>
            </Popover.Positioner>
          </Box>
        </Portal>
      </Popover.Root>
    </Box>
  );
};
