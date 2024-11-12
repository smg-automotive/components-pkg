import React, { FC } from 'react';

import Button from 'src/components/button';

import { ActionButtonInterface } from '../interface';

const ContactSupport: FC<ActionButtonInterface> = ({ t, language = 'de' }) => {
  const languageToUse = language === 'en' ? 'de' : language;
  const loginLink = `/${languageToUse}/contact`;

  return (
    <Button as="a" href={loginLink} variant="secondary">
      {t('errorPage.contactSupport')}
    </Button>
  );
};

export default ContactSupport;
