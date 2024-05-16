import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { sizes } from 'src/themes/shared/sizes';

import BaseLayout from './BaseLayout';

export interface Props {
  header: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
  skyScraperAd?: ReactNode;
  heroAd?: ReactNode;
  footer?: ReactNode;
}

const PageLayout: FC<PropsWithChildren<Props>> = ({
  header,
  maxContentWidth,
  skyScraperAd,
  footer,
  heroAd,
  children,
}) => {
  return (
    <BaseLayout
      header={header}
      footer={footer}
      skyScraperAd={skyScraperAd}
      heroAd={heroAd}
      maxContentWidth={maxContentWidth}
    >
      {children}
    </BaseLayout>
  );
};

export default PageLayout;
