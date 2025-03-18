import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { EnrichedSessionUser } from '@smg-automotive/auth';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';

import Text from 'src/components/text';
import { TenantSelectionSelectList } from 'src/components/tenantSelection/select/List';
import { ChevronDownSmallIcon, GarageIcon } from 'src/components/icons';
import Box from 'src/components/box';

import { NavigationTenantMenuLoading } from './Loading';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

const NavigationTenantMenu: FC<Props> = ({ user, selectTenant }) => {
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const { onClose, isOpen, onToggle } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useI18n();
  const onTenantSelect = useCallback(
    async (selectedTenantId: number) => {
      setIsLoading(true);
      await selectTenant(selectedTenantId);
      onClose();
      setIsLoading(false);
    },
    [selectTenant, onClose],
  );

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
    <Popover
      placement="bottom-end"
      returnFocusOnClose={true}
      onClose={onClose}
      isOpen={isOpen}
      initialFocusRef={initialFocusRef}
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
          <Text
            as="span"
            fontWeight="bold"
            noOfLines={1}
            maxW="2xl"
            textAlign="left"
            title={selectedTenantInfo}
          >
            {selectedTenantInfo}
          </Text>
        </Button>
      </PopoverTrigger>
      <Portal>
        <Box zIndex="popover" w="full" h="full" position="relative">
          <PopoverContent
            bg="white"
            boxShadow="sm"
            color="inherit"
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
          >
            <TenantSelectionSelectList
              managedSellers={user.managedSellers}
              selectedTenantId={selectedTenant.id}
              onTenantSelect={onTenantSelect}
              title={t('auth.tenantSelection.selectionTitle')}
              searchFieldOptions={{ autoComplete: 'off' }}
              ref={initialFocusRef}
            />
            {isLoading ? <NavigationTenantMenuLoading /> : null}
          </PopoverContent>
        </Box>
      </Portal>
    </Popover>
  );
};

export default NavigationTenantMenu;
