import React, { FC } from 'react';

import { ActionButtonInterface } from '@/src/components/errorPage/actions/interface';
import { BackToHomepage } from '@/src/components/errorPage/actions/BackToHomepage';

export const BackToHomepagePrimary: FC<ActionButtonInterface> = (props) => {
  return <BackToHomepage {...props} variant="primary" />;
};
