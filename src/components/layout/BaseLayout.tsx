import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Container } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/tokens/sizes';

import { Separator } from '../separator';

import { Flex } from '../flex';

export interface BaseLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
  skyScraperAd?: ReactNode;
  heroAd?: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
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
          marginX={{ base: 'lg', md: '2xl' }}
          paddingBottom={{ base: '5xl', md: '6xl' }}
          paddingTop="2xl"
        >
          {children}
        </Container>
        {skyScraperAd ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            css={{
              lg: { '--width': '300px' },
              xl: { '--width': '500px' },
            }}
            width="var(--width)"
            minWidth="var(--width)"
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
