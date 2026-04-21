import React, { FC } from 'react';

import { ActionButtonInterface } from '@/src/components/errorPage/actions/interface';
import Button from '@/src/components/button';

const ContactSupport: FC<ActionButtonInterface> = ({ t, language = 'de' }) => {
  const loginLink = `/${language}/contact`;

  return (
    <Button as="a" href={loginLink} variant="secondary">
      {t('errorPage.contactSupport')}
    </Button>
  );
};

export default ContactSupport;
