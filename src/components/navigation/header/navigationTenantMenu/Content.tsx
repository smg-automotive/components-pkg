import React, { forwardRef, useCallback, useState } from 'react';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import { TenantSelectionSelectList } from 'src/components/tenantSelection/select/List';

import { NavigationTenantMenuLoading } from './Loading';

type Props = {
  user: EnrichedSessionUser;
  selectTenant: (sellerId: number | string) => Promise<void>;
  onClose: () => void;
  title?: string;
  selectedTenantId: number;
};

const NavigationTenantMenuContent = forwardRef<HTMLInputElement, Props>(
  ({ user, selectTenant, onClose, title, selectedTenantId }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    const onTenantSelect = useCallback(
      async (newTenantId: number) => {
        setIsLoading(true);
        try {
          await selectTenant(newTenantId);
        } finally {
          onClose();
          setIsLoading(false);
        }
      },
      [selectTenant, onClose],
    );

    return (
      <>
        <TenantSelectionSelectList
          managedSellers={user.managedSellers}
          selectedTenantId={selectedTenantId}
          onTenantSelect={onTenantSelect}
          title={title}
          searchFieldOptions={{ autoComplete: 'off' }}
          ref={ref}
        />
        {isLoading ? <NavigationTenantMenuLoading /> : null}
      </>
    );
  },
);

export default NavigationTenantMenuContent;
