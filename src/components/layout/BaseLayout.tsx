import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Container } from '@chakra-ui/react';

import { getSharedConfig } from 'src/themes/shared';

import { Separator } from '../separator';

import { Flex } from '../flex';

const sharedConfig = getSharedConfig();
const containerSizes = sharedConfig.theme.tokens.sizes.container;

export interface BaseLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  skyScraperAd?: ReactNode;
  heroAd?: ReactNode;
  maxContentWidth: keyof typeof containerSizes;
}

export const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({
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
          <Separator />
        </>
      ) : null}
      {heroAd ? heroAd : null}
      <Flex justifyContent="center">
        <Container
          as="main"
          width="full"
          height="full"
          maxWidth={`container.${maxContentWidth}`}
          marginX={{ '2xs': 'lg', lg: '2xl' }}
          paddingBottom={{ md: '5xl', base: '3xl' }}
          paddingTop={{ '2xs': 'md', md: '2xl' }}
        >
          {children}
        </Container>
        {skyScraperAd ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            css={{
              '--lg-width': '300px',
              '--xl-width': '500px',
            }}
            width={{ lg: 'var(--lg-width)', xl: 'var(--xl-width)' }}
            minWidth={{ lg: 'var(--lg-width)', xl: 'var(--xl-width)' }}
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
