import React, {
  FunctionComponent,
  MouseEvent,
  useCallback,
  useMemo,
} from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { EnrichedSessionUser } from '@smg-automotive/auth';

import { ListItemWithChildren, SearchableList } from '../list/SearchableList';
import { H1 } from '../heading';

import { TenantSelectionModalLayout } from './ModalLayout';
import { createTenantLabel } from './createTenantLabel';

import { TenantSelectionState } from '.';

interface Props {
  tenantSelection: TenantSelectionState;
  setTenantSelection: React.Dispatch<
    React.SetStateAction<TenantSelectionState>
  >;
  user: EnrichedSessionUser;
}

type ButtonWithValue = HTMLButtonElement & { value: string };

export const TenantSelectionSelect: FunctionComponent<Props> = ({
  tenantSelection,
  setTenantSelection,
  user,
}) => {
  const { t } = useI18n();

  const onClick = useCallback(
    (event: MouseEvent<ButtonWithValue>) => {
      const selectedTenant = parseInt(event.currentTarget.value, 10);

      setTenantSelection((current) => {
        return {
          ...current,
          selectedTenant,
          showSelection: false,
        };
      });
    },
    [setTenantSelection],
  );

  const listItems: Array<ListItemWithChildren> = useMemo(() => {
    return user.managedSellers.map((managedSeller) => {
      return {
        value: managedSeller.id.toString(),
        label: createTenantLabel(managedSeller),
        onClick,
        showChevron: false,
        isSelected: managedSeller.id === tenantSelection.selectedTenant,
      };
    });
  }, [user, onClick, tenantSelection.selectedTenant]);

  return (
    <TenantSelectionModalLayout>
      <H1 textStyle="heading3">{t('auth.tenantSelection.selectionTitle')}</H1>
      <SearchableList listItems={listItems} />
    </TenantSelectionModalLayout>
  );
};
