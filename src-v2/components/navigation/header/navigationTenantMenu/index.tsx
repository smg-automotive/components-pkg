import React, { FC, useMemo, useRef } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';

import Text from 'src/components/text';
import { ChevronDownSmallIcon, GarageIcon } from 'src/components/icons';
import Hide from 'src/components/hide';
import Box from 'src/components/box';

import NavigationTenantMenuContent from './Content';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

const NavigationTenantMenu: FC<Props> = ({ user, selectTenant }) => {
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const { onClose, isOpen, onToggle } = useDisclosure();
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
    <Hide below="sm">
      <Popover
        placement="bottom-end"
        returnFocusOnClose={true}
        onClose={onClose}
        isOpen={isOpen}
        initialFocusRef={initialFocusRef}
        isLazy={true}
        lazyBehavior="unmount"
      >
        <PopoverTrigger>
          <Button
            p="0"
            color={isOpen ? 'blue.700' : 'gray.900'}
            _hover={{ color: 'blue.700' }}
            leftIcon={<GarageIcon />}
            rightIcon={
              <ChevronDownSmallIcon
                transition="0.2s"
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
              />
            }
            iconSpacing="xs"
            onClick={onToggle}
          >
            <Hide below="md">
              <Text
                as="span"
                fontWeight="bold"
                noOfLines={1}
                maxW={{ base: 'xl', md: '2xl' }}
                textAlign="left"
                title={selectedTenantInfo}
              >
                {selectedTenantInfo}
              </Text>
            </Hide>
          </Button>
        </PopoverTrigger>
        <Portal>
          <Box zIndex="popover" w="full" h="full" position="relative">
            <PopoverContent
              bg="white"
              boxShadow="sm"
              color="gray.900"
              width={{
                base: 'full',
                md: '6xl',
              }}
              maxH="auth0-height"
              p="2xl"
              borderRadius="sm"
              borderWidth="1px"
              borderColor="gray.200"
              marginTop="10px"
              alignItems="center"
              flexDirection="column"
              gridGap="2xl"
              overflow="auto"
            >
              <NavigationTenantMenuContent
                user={user}
                selectTenant={selectTenant}
                onClose={onClose}
                selectedTenantId={selectedTenant.id}
                title={t('auth.tenantSelection.selectionTitle')}
                ref={initialFocusRef}
              />
            </PopoverContent>
          </Box>
        </Portal>
      </Popover>
    </Hide>
  );
};

export default NavigationTenantMenu;
