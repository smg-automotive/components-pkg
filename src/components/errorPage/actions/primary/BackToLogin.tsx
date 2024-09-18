import React, { FC } from 'react';

import Button from 'src/components/button';

import { ActionButtonInterface } from '../interface';

const BackToLogin: FC<ActionButtonInterface> = ({ t, language = 'de' }) => {
  const languageToUse = language === 'en' ? 'de' : language;
  const loginLink = `/${languageToUse}/account/logon`;

  return (
    <Button as="a" href={loginLink}>
      {t('errorPage.backToLogin')}
    </Button>
  );
};

export default BackToLogin;
