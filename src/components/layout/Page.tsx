import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { sizes } from '../../themes/shared/sizes';
import BaseLayout from './BaseLayout';

interface Props {
  header: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
  skyScraperAd?: ReactNode;
  footer?: ReactNode;
}

const PageLayout: FC<PropsWithChildren<Props>> = ({
  header,
  maxContentWidth,
  skyScraperAd,
  footer,
  children,
}) => {
  return (
    <BaseLayout
      header={header}
      footer={footer}
      skyScraperAd={skyScraperAd}
      maxContentWidth={maxContentWidth}
    >
      {children}
    </BaseLayout>
  );
};

export default PageLayout;
