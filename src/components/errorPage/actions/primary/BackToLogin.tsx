import React, { FC } from 'react';

import Button from 'src/components/button';

import { ActionButtonInterface } from '../interface';

const BackToLogin: FC<ActionButtonInterface> = ({ t, language = 'de' }) => {
  const languageToUse = language === 'en' ? 'de' : language;
  const logoutLink = `/seller-web/api/auth/logout`;
  const vehicleManagementLink = `/${languageToUse}/vehicle-management`;
  const loginLink = `/seller-web/api/auth/login?locale=${languageToUse}&returnTo=${encodeURIComponent(vehicleManagementLink)}`;
  const query = `?returnTo=${encodeURIComponent(loginLink)}`;
  const logoutBeforeLoginLink = `${logoutLink}${query}`;

  return (
    <Button as="a" href={logoutBeforeLoginLink}>
      {t('errorPage.backToLogin')}
    </Button>
  );
};

export default BackToLogin;
