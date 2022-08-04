import React, { FC } from 'react';

import { chakra, Flex, useMultiStyleConfig } from '@chakra-ui/react';

import { CloseIcon } from '../icons';

interface Props {
  title: string;
  url: string;
}

const SimpleHeader: FC<Props> = ({ title, url }) => {
  const styles = useMultiStyleConfig(`SimpleHeader`);

  const Component = chakra('header', { baseStyle: styles.header });

  return (
    <Component>
      <Flex
        minH={{ xs: 'xl', lg: '2xl' }}
        paddingY="xl"
        align="center"
        justify="space-between"
      >
        <chakra.h1 __css={styles.title}>{title}</chakra.h1>
        <Flex alignSelf="baseline" paddingLeft="md" paddingTop={{ lg: 'md' }}>
          <a href={url}>
            <CloseIcon />
          </a>
        </Flex>
      </Flex>
    </Component>
  );
};

export default SimpleHeader;
