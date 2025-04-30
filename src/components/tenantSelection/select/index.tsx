import React, { FunctionComponent, useCallback } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import { TenantSelectionModalLayout } from '../ModalLayout';

import { TenantSelectionSelectList } from './List';
import { TenantSelectionState } from '..';

interface Props {
  tenantSelection: TenantSelectionState;
  setTenantSelection: React.Dispatch<
    React.SetStateAction<TenantSelectionState>
  >;
  user: EnrichedSessionUser;
}

export const TenantSelectionSelect: FunctionComponent<Props> = ({
  tenantSelection,
  setTenantSelection,
  user,
}) => {
  const { t } = useI18n();

  const onTenantSelect = useCallback(
    (selectedTenantId: number) => {
      setTenantSelection((current) => {
        return {
          ...current,
          selectedTenant: selectedTenantId,
          showSelection: false,
        };
      });
    },
    [setTenantSelection],
  );

  return (
    <TenantSelectionModalLayout>
      <TenantSelectionSelectList
        title={t('auth.tenantSelection.selectionTitle')}
        managedSellers={user.managedSellers}
        selectedTenantId={tenantSelection.selectedTenant}
        onTenantSelect={onTenantSelect}
      />
    </TenantSelectionModalLayout>
  );
};
