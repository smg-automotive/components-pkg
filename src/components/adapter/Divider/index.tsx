import React, { FC } from 'react';

import { Separator, SeparatorProps } from 'src/components/separator';

type Props = SeparatorProps;

export const Divider: FC<Props> = (props) => {
  return <Separator {...props} />;
};
