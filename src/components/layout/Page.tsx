import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { sizes } from 'src/themes/shared/sizes';

import BaseLayout from './BaseLayout';

interface Props {
  header: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
  skyScraperAd?: ReactNode;
  footer?: ReactNode;
  isSrpAds?: boolean;
}

const PageLayout: FC<PropsWithChildren<Props>> = ({
  header,
  maxContentWidth,
  skyScraperAd,
  footer,
  children,
  isSrpAds,
}) => {
  return (
    <BaseLayout
      header={header}
      footer={footer}
      skyScraperAd={skyScraperAd}
      maxContentWidth={maxContentWidth}
      isSrpAds={isSrpAds}
    >
      {children}
    </BaseLayout>
  );
};

export default PageLayout;
