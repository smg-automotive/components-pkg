import React, { FC } from 'react';

import {
  Box,
  chakra,
  Divider,
  Flex,
  Link,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import { CloseIcon } from '../../assets/icons/CloseIcon';

interface Props {
  title: string;
  url: string;
}

const SimpleTitleHeading: FC<Props> = ({ title, url }) => {
  const styles = useMultiStyleConfig(`SimpleTitleHeading`);

  const renderCloseIcon = () => (
    <Flex justify="end">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        cursor="pointer"
      >
        <CloseIcon />
      </Link>
    </Flex>
  );

  return (
    <header>
      <Box
        paddingY={{ xs: 'md', lg: '3xl' }}
        paddingX={{ xs: 'md', lg: '5xl' }}
      >
        {renderCloseIcon()}
        <chakra.h3 __css={styles.title}>{title}</chakra.h3>
      </Box>
      <Divider border="1px" borderColor="gray.100" />
    </header>
  );
};

export default SimpleTitleHeading;
