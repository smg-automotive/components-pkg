import React, { FC } from 'react';
import { Divider as ChakraDivider, ResponsiveValue } from '@chakra-ui/react';

import { Sizes } from '../../themes';

type Props = {
  verticalSpacing?: ResponsiveValue<Sizes>;
};

const Divider: FC<Props> = ({ verticalSpacing }) => {
  return <ChakraDivider my={verticalSpacing} />;
};

export default Divider;
