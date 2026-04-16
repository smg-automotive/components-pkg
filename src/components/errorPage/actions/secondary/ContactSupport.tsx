import React, { FC } from 'react';

import { Button } from 'src/components/button';

import { ActionButtonInterface } from '../interface';

export const ContactSupport: FC<ActionButtonInterface> = ({
  t,
  language = 'de',
}) => {
  const loginLink = `/${language}/contact`;

  return (
    <Button as="a" href={loginLink} variant="secondary">
      {t('errorPage.contactSupport')}
    </Button>
  );
};
