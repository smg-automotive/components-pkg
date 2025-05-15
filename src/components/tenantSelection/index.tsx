import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

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

  const [content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    const importContent = async () => {
      if (user && user.forceTenantSelection) {
        if (isLoading) {
          const TenantSelectionLoadingState = (await import('./Loading'))
            .TenantSelectionLoadingState;
          setContent(<TenantSelectionLoadingState />);
        } else if (tenantSelection.showSelection) {
          const TenantSelectionSelect = (await import('./select'))
            .TenantSelectionSelect;
          setContent(
            <TenantSelectionSelect
              user={user}
              tenantSelection={tenantSelection}
              setTenantSelection={setTenantSelection}
            />,
          );
        } else {
          const TenantSelectionOverview = (await import('./Overview'))
            .TenantSelectionOverview;
          setContent(
            <TenantSelectionOverview
              user={user}
              tenantSelection={tenantSelection}
              setTenantSelection={setTenantSelection}
              selectTenant={selectTenant}
            />,
          );
        }
      }
    };
    importContent();
  }, [
    isLoading,
    tenantSelection.showSelection,
    user,
    selectTenant,
    tenantSelection,
  ]);

  if (!user || !user.forceTenantSelection) return null;

  return (
    <TenantSelectionContainer language={language}>
      {content}
    </TenantSelectionContainer>
  );
};

export default TenantSelection;
