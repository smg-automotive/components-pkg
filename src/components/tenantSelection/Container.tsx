import React, { FC, PropsWithChildren } from 'react';
import { Language } from '@smg-automotive/i18n-pkg';

import TranslationProvider from '../translationProvider';
import Modal from '../modal';

export const TenantSelectionContainer: FC<
  PropsWithChildren<{ language: Language }>
> = ({ language, children }) => (
  <TranslationProvider language={language} scopes={['auth.tenantSelection']}>
    <Modal
      isOpen
      onClose={() => {}}
      motionPreset="none"
      size="auth0"
      overlayColor="gray"
      disableBodyPadding
    >
      {children}
    </Modal>
  </TranslationProvider>
);
