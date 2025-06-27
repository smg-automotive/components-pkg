import React, { FC } from 'react';

import Button from 'src/components/button';

import { ActionButtonInterface } from '../interface';

const Reload: FC<ActionButtonInterface> = ({ t }) => {
  return (
    <Button
      onClick={() => {
        window.location.reload();
      }}
    >
      {t('errorPage.reloadPage')}
    </Button>
  );
};

export default Reload;
