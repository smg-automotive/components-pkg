import React, { FC, PropsWithChildren, ReactNode } from 'react';

import BaseLayout from './BaseLayout';
import { Container } from '@chakra-ui/react';
import { sizes } from '../../themes/shared/sizes';

interface Props {
  header: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
  skyScraperAds?: ReactNode;
  footer?: ReactNode;
}

const PageWithAdsLayout: FC<PropsWithChildren<Props>> = ({
  header,
  maxContentWidth,
  skyScraperAds,
  footer,
  children,
}) => {
  return (
    <BaseLayout header={header} footer={footer} skyScraperAds={skyScraperAds}>
      <Container
        as="main"
        width="full"
        height="full"
        maxWidth={sizes.container[maxContentWidth]}
        paddingY={{ '2xs': 'md', md: '2xl' }}
        paddingX={{ '2xs': 'lg', lg: 0 }}
      >
        {children}
      </Container>
    </BaseLayout>
  );
};

export default PageWithAdsLayout;
