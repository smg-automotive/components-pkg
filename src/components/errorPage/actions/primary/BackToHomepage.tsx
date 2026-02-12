import React, { FC } from 'react';

import { ActionButtonInterface } from '../interface';
import { BackToHomepage } from '../BackToHomepage';

export const BackToHomepagePrimary: FC<ActionButtonInterface> = (props) => {
  return <BackToHomepage {...props} variant="primary" />;
};
