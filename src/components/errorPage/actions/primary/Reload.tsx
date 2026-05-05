import React, { FC } from 'react';

import { ActionButtonInterface } from '@/src/components/errorPage/actions/interface';
import Button from '@/src/components/button';

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
