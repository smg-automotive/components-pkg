import React, { FC, PropsWithChildren } from 'react';

import { sizes } from 'src/themes/shared/tokens/sizes';
import { SingleColumnCenteredLayout } from 'src/components/layout/SingleColumnCentered';

type Props = PropsWithChildren<{
  maxContentWidth?: keyof (typeof sizes)['container'];
}>;

export const InsertionLayout: FC<Props> = (props) => {
  return <SingleColumnCenteredLayout {...props} />;
};
