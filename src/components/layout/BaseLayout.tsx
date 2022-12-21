import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Container, Flex } from '@chakra-ui/react';

import Divider from '../divider';
import Box from '../box';
import { sizes } from '../../themes/shared/sizes';

interface Props {
  header: ReactNode;
  footer?: ReactNode;
  skyScraperAd?: ReactNode;
  maxContentWidth: keyof typeof sizes.container;
}

const BaseLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  skyScraperAd,
  maxContentWidth,
  children,
}) => {
  return (
    <>
      {header}
      <Divider />
      <Flex justifyContent="center">
        <Container
          as="main"
          width="full"
          height="full"
          maxWidth={sizes.container[maxContentWidth]}
          paddingY={{ '2xs': 'md', md: '2xl' }}
          marginX={{ '2xs': 'lg', lg: '2xl' }}
        >
          {children}
        </Container>
        {skyScraperAd ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            width="300px"
            minWidth="300px"
            paddingY={{ '2xs': 'md', md: '2xl' }}
            marginRight="2xl"
            position="relative"
          >
            <Box position="sticky" top="2xl">
              {skyScraperAd}
            </Box>
          </chakra.aside>
        ) : null}
      </Flex>
      <div>{footer ? footer : null}</div>
    </>
  );
};

export default BaseLayout;
