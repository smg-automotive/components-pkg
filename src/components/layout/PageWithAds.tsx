import React, { FC, PropsWithChildren, ReactNode } from 'react';

import BaseLayout from './BaseLayout';
import BaseGridLayout from './BaseGrid';

interface Props {
  header: ReactNode;
  footer?: ReactNode;
  ads?: ReactNode;
}

const PageWithAdsLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  ads,
  children,
}) => {
  return (
    <BaseLayout header={header} footer={footer} ads={ads}>
      <BaseGridLayout gridTemplateColumns="1fr">{children}</BaseGridLayout>
    </BaseLayout>
  );
};

export default PageWithAdsLayout;
