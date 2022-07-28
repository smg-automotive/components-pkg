import React, { FC } from 'react';

import { chakra, Flex, useMultiStyleConfig } from '@chakra-ui/react';

import { CloseIcon } from '../../assets/icons/CloseIcon';

interface Props {
  title: string;
  url: string;
}

const SimpleTitleHeading: FC<Props> = ({ title, url }) => {
  const styles = useMultiStyleConfig(`SimpleTitleHeading`);

  return (
    <header>
      <Flex
        minH={{ xs: 'xl', lg: '2xl' }}
        paddingX={{ xs: 'md', lg: '4xl' }}
        paddingY="xl"
        align="baseline"
        justify="space-between"
        border="1px"
        borderX="none"
        borderTop="none"
        borderBottomColor="gray.200"
      >
        <chakra.h1 __css={styles.title}>{title}</chakra.h1>
        <a href={url}>
          <CloseIcon />
        </a>
      </Flex>
    </header>
  );
};

export default SimpleTitleHeading;
