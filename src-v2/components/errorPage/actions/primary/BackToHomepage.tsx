import React, { FC } from 'react';

import { ActionButtonInterface } from '../interface';
import BackToHomepage from '../BackToHomepage';

const BackToHomepagePrimary: FC<ActionButtonInterface> = (props) => {
  return <BackToHomepage {...props} variant="primary" />;
};

export default BackToHomepagePrimary;
