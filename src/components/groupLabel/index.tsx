import React, { FC, PropsWithChildren } from 'react';
import { Box, List, Text, useMultiStyleConfig } from '@chakra-ui/react';

import { H4 } from '../';

interface GroupLabelProps {
  title?: string;
}

const GroupLabel: FC<PropsWithChildren<GroupLabelProps>> = ({
  title,
  children,
  ...rest
}) => {
  const { list } = useMultiStyleConfig(`GroupLabel`);

  return (
    <Box {...rest}>
      {title ? <H4>{title}</H4> : null}
      <List __css={list}>{children}</List>
    </Box>
  );
};

export default GroupLabel;
