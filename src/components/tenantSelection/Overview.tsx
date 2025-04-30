import React, { FunctionComponent } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';
import { Image } from '@chakra-ui/react';

import Text from '../text';
import { H1 } from '../heading';
import Button from '../button';

import tenantImage from './tenantSelectionIllustration.png';
import { TenantSelectionModalLayout } from './ModalLayout';
import { createTenantLabel } from './createTenantLabel';

import { TenantSelectionState } from '.';

interface Props {
  tenantSelection: TenantSelectionState;
  setTenantSelection: React.Dispatch<
    React.SetStateAction<TenantSelectionState>
  >;
  selectTenant: (sellerId: number | string) => void;
  user: EnrichedSessionUser;
}

export const TenantSelectionOverview: FunctionComponent<Props> = ({
  tenantSelection,
  setTenantSelection,
  user,
  selectTenant,
}) => {
  const { t } = useI18n();

  const getSelectButtonLabel = () => {
    if (!tenantSelection.selectedTenant)
      return t('auth.tenantSelection.selectButton');

    const selectedManagedSeller = user.managedSellers.find((managedSeller) => {
      return managedSeller.id === tenantSelection.selectedTenant;
    });

    return createTenantLabel(selectedManagedSeller);
  };

  return (
    <TenantSelectionModalLayout>
      <Image
        src={tenantImage}
        alt="tenant selection illustration"
        width="120px"
        height="120px"
        loading="lazy"
      />
      <H1 textStyle="heading3">{t('auth.tenantSelection.title')}</H1>
      <Text textAlign="center">{t('auth.tenantSelection.description')}</Text>
      <Button
        variant="secondary"
        onClick={() => {
          setTenantSelection((currentState) => {
            return { ...currentState, showSelection: true };
          });
        }}
        width="full"
      >
        {getSelectButtonLabel()}
      </Button>
      <Button
        isDisabled={!tenantSelection.selectedTenant}
        onClick={() => {
          if (!tenantSelection.selectedTenant) return;
          selectTenant(tenantSelection.selectedTenant);
        }}
        width="full"
      >
        {t('auth.tenantSelection.loginButton')}
      </Button>
    </TenantSelectionModalLayout>
  );
};
