import React, { FC } from 'react';

import { ActionButtonInterface } from '../interface';
import BackToHomepage from '../BackToHomepage';

const BackToHomepageSecondary: FC<ActionButtonInterface> = (props) => {
  return <BackToHomepage {...props} variant="secondary" />;
};

export default BackToHomepageSecondary;
