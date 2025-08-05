import React, { FC } from 'react';

import { Button } from 'src/components/button';

import { ActionButtonInterface } from '../interface';

const BackToLogin: FC<ActionButtonInterface> = ({ t, language = 'de' }) => {
  const languageToUse = language === 'en' ? 'de' : language;
  const logoutLink = `/${languageToUse}/account/logoff`;
  const loginLink = `/${languageToUse}/account/logon`;
  const query = `?returnurl=${encodeURIComponent(loginLink)}`;
  const logoutBeforeLoginLink = `${logoutLink}${query}`;

  return (
    <Button as="a" href={logoutBeforeLoginLink}>
      {t('errorPage.backToLogin')}
    </Button>
  );
};

export default BackToLogin;
