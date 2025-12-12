import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import type { EnrichedSessionUser } from '@smg-automotive/auth';

import { AvatarIcon, LogoutIcon } from 'src/components/icons';
import { Button } from 'src/components/button';

type Props = {
  user: EnrichedSessionUser | null;
  onLogin: () => void;
  onLogout: () => void;
};

export const DrawerLoginToggle: FC<Props> = ({ user, onLogin, onLogout }) => {
  const { t } = useI18n();
  return (
    <Button
      as="button"
      variant="secondary"
      size="md"
      marginTop="md"
      marginX="lg"
      onClick={user ? onLogout : onLogin}
    >
      {user ? <LogoutIcon /> : <AvatarIcon />}
      {user ? t('header.userMenu.logout') : t('header.login')}
    </Button>
  );
};
