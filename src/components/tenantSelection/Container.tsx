import React, { FC, PropsWithChildren } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import { TranslationProvider } from '../translationProvider';
import { Dialog } from '../dialog';

export const TenantSelectionContainer: FC<
  PropsWithChildren<{ language: Language }>
> = ({ language, children }) => (
  <TranslationProvider language={language} scopes={['auth.tenantSelection']}>
    <Dialog
      open
      onOpenChange={() => {}}
      motionPreset="none"
      size="auth0"
      overlayColor="gray"
      disableBodyPadding
    >
      {children}
    </Dialog>
  </TranslationProvider>
);
