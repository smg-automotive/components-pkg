import React, { FC } from 'react';

// TODO: will swap with button v3 when available
import Button from 'src-v2/components/button';

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
