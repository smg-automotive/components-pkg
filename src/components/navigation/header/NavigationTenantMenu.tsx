import React, {
  FC,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import { createTenantLabel } from 'src/components/tenantSelection/createTenantLabel';
import Spinner from 'src/components/spinner';
import {
  ListItemWithChildren,
  SearchableList,
} from 'src/components/list/SearchableList';
import { ChevronDownSmallIcon, GarageIcon } from 'src/components/icons';
import { H1 } from 'src/components/heading';
import Box from 'src/components/box';

type Props = {
  user: EnrichedSessionUser | null;
  selectTenant: (sellerId: number | string) => Promise<void>;
};

type ButtonWithValue = HTMLButtonElement & { value: string };

const NavigationTenantMenu: FC<Props> = ({ user, selectTenant }) => {
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const { onClose, isOpen, onToggle } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useI18n();
  const onClick = useCallback(
    async (event: MouseEvent<ButtonWithValue>) => {
      const selectedTenantId = parseInt(event.currentTarget.value, 10);
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

  const listItems: Array<ListItemWithChildren> = useMemo(() => {
    return (user?.managedSellers || []).map((managedSeller) => {
      return {
        value: managedSeller.id.toString(),
        label: createTenantLabel(managedSeller),
        onClick,
        isSelected: managedSeller.id === selectedTenant?.id,
      };
    });
  }, [user?.managedSellers, selectedTenant, onClick]);

  if (!user || !user.isMultiTenantUser || !selectedTenant) return null;

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
          >
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
            <SearchableList
              listItems={listItems}
              ref={initialFocusRef}
              searchFieldOptions={{ autocomplete: 'off' }}
            />
            {isLoading ? (
              <>
                <Box
                  position="absolute"
                  w="full"
                  h="full"
                  top="0"
                  bg="gray.900"
                  opacity="0.7"
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                >
                  <Spinner />
                </Box>
              </>
            ) : null}
          </PopoverContent>
        </Box>
      </Portal>
    </Popover>
  );
};

export default NavigationTenantMenu;
