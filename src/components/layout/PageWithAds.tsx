import React, { FC, PropsWithChildren, ReactNode } from 'react';

import BaseLayout from './BaseLayout';
import BaseGridLayout from './BaseGrid';

interface Props {
  header: ReactNode;
  footer?: ReactNode;
  skyScraperAds?: ReactNode;
}

const PageWithAdsLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  skyScraperAds,
  children,
}) => {
  return (
    <BaseLayout header={header} footer={footer} skyScraperAds={skyScraperAds}>
      <BaseGridLayout gridTemplateColumns="1fr">{children}</BaseGridLayout>
    </BaseLayout>
  );
};

export default PageWithAdsLayout;
