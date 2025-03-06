import React, { FC, MouseEvent, useCallback, useMemo, useRef } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { ManagedSeller } from '@smg-automotive/auth';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';

import Text from 'src/components/text';
import { createTenantLabel } from 'src/components/tenantSelection/createTenantLabel';
import {
  ListItemWithChildren,
  SearchableList,
} from 'src/components/list/SearchableList';
import { ChevronDownSmallIcon, GarageIcon } from 'src/components/icons';
import { H1 } from 'src/components/heading';
import Box from 'src/components/box';

type Props = {
  selectedTenant: ManagedSeller | null;
  availableTenants: ManagedSeller[] | null;
  selectTenant: (sellerId: number | string) => void;
};

type ButtonWithValue = HTMLButtonElement & { value: string };

const NavigationTenantMenu: FC<Props> = ({
  selectedTenant,
  availableTenants,
  selectTenant,
}) => {
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const { onClose, isOpen, onToggle } = useDisclosure();
  const { t } = useI18n();
  const onClick = useCallback(
    (event: MouseEvent<ButtonWithValue>) => {
      const selectedTenantId = parseInt(event.currentTarget.value, 10);
      selectTenant(selectedTenantId);
      onClose();
    },
    [selectTenant, onClose],
  );

  const listItems: Array<ListItemWithChildren> = useMemo(() => {
    return (availableTenants || []).map((managedSeller) => {
      return {
        value: managedSeller.id.toString(),
        label: createTenantLabel(managedSeller),
        onClick,
        isSelected: managedSeller.id === selectedTenant?.id,
      };
    });
  }, [availableTenants, onClick, selectedTenant]);

  if (!selectedTenant || !availableTenants) return null;

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
          <Text as="span" fontWeight="bold" noOfLines={1} maxW="2xl">
            {selectedTenant.billingName || selectedTenant.id}
            {selectedTenant.billingCity ? ', ' : null}
            {selectedTenant.billingCity}
          </Text>
        </Button>
      </PopoverTrigger>
      <Portal>
        <Box zIndex="popover" w="full" h="full" position="relative">
          <PopoverContent
            bg="white"
            boxShadow="sm"
            color="inherit"
            minW="auth0-width"
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
            <H1 textStyle="heading3">
              {t('auth.tenantSelection.selectionTitle')}
            </H1>
            <SearchableList listItems={listItems} ref={initialFocusRef} />
          </PopoverContent>
        </Box>
      </Portal>
    </Popover>
  );
};

export default NavigationTenantMenu;
