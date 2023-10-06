import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Container } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/sizes';
import { breakpoints } from 'src/themes';
import { useMediaQuery } from 'src/hooks';

import Flex from '../flex';
import Divider from '../divider';

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
  skyScraperAd?: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
  isSrpAds?: boolean;
}

const BaseLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  skyScraperAd,
  maxContentWidth,
  children,
  isSrpAds,
}) => {
  const desktopLarge = useMediaQuery({ above: `${breakpoints.xl.px}px` });

  return (
    <>
      {header ? (
        <>
          {header}
          <Divider />
        </>
      ) : null}
      <Flex justifyContent="center">
        <Container
          as="main"
          width="full"
          height="full"
          maxWidth={sizes.container[maxContentWidth]}
          marginX={{ '2xs': 'lg', lg: '2xl' }}
          paddingBottom={{ md: '5xl', base: '3xl' }}
          paddingTop={{ '2xs': 'md', md: '2xl' }}
        >
          {children}
        </Container>
        {skyScraperAd ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            width={isSrpAds && desktopLarge ? '500px' : '300px'}
            minWidth={isSrpAds && desktopLarge ? '500px' : '300px'}
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
