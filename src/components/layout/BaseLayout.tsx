import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Flex } from '@chakra-ui/react';

import Divider from '../divider';
import Box from '../box';

interface Props {
  header: ReactNode;
  footer?: ReactNode;
  skyScraperAds?: ReactNode;
}

const BaseLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  skyScraperAds,
  children,
}) => {
  return (
    <>
      {header}
      <Divider />
      <Flex justifyContent="center">
        {children}
        {skyScraperAds ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            width="300px"
            marginX="2xl"
            paddingY={{ '2xs': 'md', md: '2xl' }}
            position="relative"
          >
            <Box position="sticky" top="2xl">
              {skyScraperAds}
            </Box>
          </chakra.aside>
        ) : null}
      </Flex>
      <div>{footer ? footer : null}</div>
    </>
  );
};

export default BaseLayout;
