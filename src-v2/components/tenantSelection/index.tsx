import React, { FC, useState } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import { TenantSelectionSelect } from './select';
import { TenantSelectionOverview } from './Overview';
import { TenantSelectionLoadingState } from './Loading';
import { TenantSelectionContainer } from './Container';

export type TenantSelectionState = {
  showSelection: boolean;
  persistSelection: boolean;
  selectedTenant: null | number;
};

export type TenantSelectionProps = {
  user: EnrichedSessionUser | null;
  isLoading?: boolean;
  selectTenant: (sellerId: number | string) => void;
  language: Language;
};

const TenantSelection: FC<TenantSelectionProps> = ({
  user,
  isLoading = false,
  selectTenant,
  language,
}) => {
  const [tenantSelection, setTenantSelection] = useState<TenantSelectionState>({
    showSelection: false,
    selectedTenant: null,
    persistSelection: true,
  });

  if (!user || !user.forceTenantSelection) return null;

  if (isLoading) {
    return (
      <TenantSelectionContainer language={language}>
        <TenantSelectionLoadingState />
      </TenantSelectionContainer>
    );
  }

  if (tenantSelection.showSelection) {
    return (
      <TenantSelectionContainer language={language}>
        <TenantSelectionSelect
          user={user}
          tenantSelection={tenantSelection}
          setTenantSelection={setTenantSelection}
        />
      </TenantSelectionContainer>
    );
  }

  return (
    <TenantSelectionContainer language={language}>
      <TenantSelectionOverview
        user={user}
        tenantSelection={tenantSelection}
        setTenantSelection={setTenantSelection}
        selectTenant={selectTenant}
      />
    </TenantSelectionContainer>
  );
};

export default TenantSelection;
