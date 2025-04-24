import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Container } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/sizes';

import Flex from '../flex';
import Divider from '../divider';

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
  skyScraperAd?: ReactNode;
  heroAd?: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
}

const BaseLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  skyScraperAd,
  heroAd,
  maxContentWidth,
  children,
}) => {
  return (
    <>
      {header ? (
        <>
          {header}
          <Divider />
        </>
      ) : null}
      {heroAd ? heroAd : null}
      <Flex justifyContent="center">
        <Container
          as="main"
          width="full"
          height="full"
          maxWidth={sizes.container[maxContentWidth]}
          marginX={{ base: 'lg', md: '2xl' }}
          paddingBottom={{ base: '5xl', md: '6xl' }}
          paddingTop="2xl"
        >
          {children}
        </Container>
        {skyScraperAd ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            width={{ lg: '300px', xl: '500px' }}
            minWidth={{ lg: '300px', xl: '500px' }}
            marginRight="2xl"
            position="relative"
            paddingBottom={{ md: '5xl', base: '3xl' }}
            paddingTop={{ '2xs': 'md', md: '2xl' }}
          >
            {skyScraperAd}
          </chakra.aside>
        ) : null}
      </Flex>
      <div>{footer ? footer : null}</div>
    </>
  );
};

export default BaseLayout;
