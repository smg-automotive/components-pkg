import React, { FC } from 'react';

import {
  Box,
  chakra,
  Divider,
  Link,
  useMultiStyleConfig,
} from '@chakra-ui/react';

import Stack from '../stack';

import { CloseIcon } from '../../assets/icons/CloseIcon';

interface Props {
  title: string;
  url: string;
}

const SimpleTitleHeading: FC<Props> = ({ title, url }) => {
  const styles = useMultiStyleConfig(`SimpleTitleHeading`);

  const renderCloseIcon = () => (
    <Link href={url} cursor="pointer">
      <CloseIcon />
    </Link>
  );

  return (
    <header>
      <Box paddingX={{ xs: 'md', lg: '4xl' }}>
        <Stack direction="row" justify="space-between">
          <chakra.h1 __css={styles.title}>{title}</chakra.h1>
          {renderCloseIcon()}
        </Stack>
      </Box>
      <Divider border="1px" borderColor="gray.100" />
    </header>
  );
};

export default SimpleTitleHeading;
