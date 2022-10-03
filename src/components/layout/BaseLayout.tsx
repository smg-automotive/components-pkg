import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { chakra, Flex } from '@chakra-ui/react';

import Divider from '../divider';

interface Props {
  header: ReactNode;
  footer?: ReactNode;
  ads?: ReactNode;
}

const BaseLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  ads,
  children,
}) => {
  return (
    <>
      {header}
      <Divider />
      <Flex justifyContent="center">
        {children}
        {ads ? (
          <chakra.aside
            display={{ '2xs': 'none', lg: 'block' }}
            width="300px"
            marginX="2xl"
            paddingY={{ '2xs': 'md', md: '2xl' }}
            position="relative"
          >
            {ads}
          </chakra.aside>
        ) : null}
      </Flex>
      <div>{footer ? footer : null}</div>
    </>
  );
};

export default BaseLayout;
